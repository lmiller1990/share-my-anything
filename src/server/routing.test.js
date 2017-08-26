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

beforeAll(async () => {
	await mongoose.connect(testdburl, { useMongoClient: true })
})

afterAll(async () => {
	await mongoose.disconnect()
})

beforeEach(async () => {
	await Category.remove({})
})

test('it returns a category with two image uuids', async () => {
	expect.assertions(2)

	const model = await Category.create({
		name: 'cats',
		images: ['a', 'b']
	})

	const categoryWithImages = await request(app).get('/images/cats')
	expect(categoryWithImages.body.name).toBe('cats')
	expect(categoryWithImages.body.images.length).toBe(2)
})

test('it returns an empty category', async () => {
	expect.assertions(2)

	let res = await request(app).get('/images/empty')
	expect(res.body.name).toBe('empty')
	expect(res.body.images.length).toBe(0)
})
