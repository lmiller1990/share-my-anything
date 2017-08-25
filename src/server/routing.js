/**
 * @jest-environment node
 */
import fs from 'fs'
import mongoose from 'mongoose'
import uuid from 'uuid/v1'

import { APP_NAME } from '../shared/config'
import { uploadToS3, uploader } from './middleware/imageUploadMiddleware'
import { createImageEndpointRoute, getImagesEndpointRoute } from '../shared/routes'
import Category from './models/category'

import renderApp from './render-app'

const getCategory = (category) => {
	return new Promise((resolve, reject) => {
		Category.findOrCreate({
			name: category
		}, (err, cat) => {
			if (err)
				reject(err)
			resolve(cat)
		})
	})
}

export default (app) => {
	app.get('/', (req, res) => {
		res.send(renderApp(APP_NAME))
	})

	app.get(getImagesEndpointRoute(), (req, res) => {
		const category = req.params.category
		Category.findOrCreate({
			name: category
		}, (err, model) => {
			if (err)
				throw(err)
			if (model) {
				return res.json(model)
			}
			return res.json({})
		})
	})

	app.post(createImageEndpointRoute(), uploader, (req, res, next) => {
		// access file from the request
		const file = req.file
		const category = req.body.category

		// save to the computer first. Then send to S3.
		const imageFromFile = fs.readFile(`./files/${file.originalname}`, (err, data) => {
			if (err) {
				next(err)
			} else {
				// save to db 
				getCategory(category)
					.then(cat => {
						const imageuuid = uuid()
						uploadToS3(imageuuid, cat.name, data)
							.then(() => {
								cat.images.push(imageuuid)
								cat.save((err, updated) => {
									if (err)
										throw(err)
									next(res.sendStatus(200))
								})
							})
					})
			}
		})
	})
}

