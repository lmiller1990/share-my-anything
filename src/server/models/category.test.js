/**
 * @jest-environment node
 */
import 'babel-polyfill'
import mongoose from 'mongoose'

import Category from './category'
import { testdburl } from '../config/db'

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

test('it returns n random categories', (done) => {
	expect.assertions(1)

	const inserted = Category.collection.insert([
		{ name: 'a' },
		{ name: 'b' },
		{ name: 'c' },
		{ name: 'd' }
	]).then(() => {
		Category.findRandom({}, {}, {limit: 2}, (err, results) => {
			if (!err) {
				expect(results.length).toBe(2)
				done()
			}
		})
	})
})

