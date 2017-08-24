/**
 * @jest-environment node
 */
import mongoose from 'mongoose'
import { dburl } from './db'
import Category from '../models/category'

mongoose.Promise = global.Promise;

beforeAll(() => {
	return mongoose.connect(dburl, { useMongoClient: true })
})

afterAll(() => {
	return mongoose.disconnect()
})

beforeEach(() => {
	return Category.collection.drop()
})

test('creates a category', (done) => {
	expect.assertions(1)
	Category.findOrCreate({
		name: 'cats'
	}, (err, cat) => {
		if (err)
			throw(err)
		expect(cat.name).toBe('cats')
		done()
	})
})
