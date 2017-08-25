/**
 * @jest-environment node
 */
import 'babel-polyfill'
import mongoose from 'mongoose'
import Category from './models/category'
import request from 'supertest'
import app from './app'

import { testdburl } from './config/db'

mongoose.Promise = global.Promise;

beforeAll((done) => {
	mongoose.connect(testdburl, { useMongoClient: true }, (err) => {
		if (err)
			throw new Error(err)
		// console.log('connected')
		done()
	})
})

afterAll((done) => {
	mongoose.disconnect((err, db) => {
		if (err)
			throw new Error(err)
		// console.log('disconnected')
		done()
	})
})

beforeEach((done) => {
	Category.collection.drop(err => {
		if (err)
			throw new Error(err)
		done()
	})
})


test('it returns a category with two image uuids', (done) => {
	expect.assertions(2)
	const createCategories = (categoryName) => {
		return new Promise((resolve, reject) => {
			Category.create({
				name: categoryName,
				images: ['uuid1', 'uuid2']
			}, (err, model) => {
				if (err) 
					reject(err)
				resolve(model)
			})
		})
	}

	createCategories('cats').then(() => {
		request(app).get('/images/cats').then(res => {
			expect(res.body.name).toBe('cats')
			expect(res.body.images.length).toBe(2)
			done()
		})
	})
})

test('it returns an empty category', (done) => {
	expect.assertions(2)

	request(app).get('/images/empty').then(res => {
		expect(res.body.name).toBe('empty')
		expect(res.body.images.length).toBe(0)
		done()
	})
})
