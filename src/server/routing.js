import fs from 'fs'

import { APP_NAME } from '../shared/config'
import { uploadToS3, uploader } from './middleware/imageUploadMiddleware'
import { createImageEndpointRoute, getImagesEndpointRoute } from '../shared/routes'

import renderApp from './render-app'

export default (app) => {
	app.get('/', (req, res) => {
		res.send(renderApp(APP_NAME))
	})

	app.get(getImagesEndpointRoute(), (req, res) => {
		res.sendStatus(200)
	})

	app.post(createImageEndpointRoute(), uploader, (req, res, next) => {
		// access file from the request
		const file = req.file

		// save to the computer first. Then send to S3.
		const imageFromFile = fs.readFile(`./files/${file.originalname}`, (err, data) => {
			if (err) {
				next(err)
			} else {
				uploadToS3(file.originalname, data)
					.then(() => next(res.sendStatus(200))
					)
			}
		})
	})
}
