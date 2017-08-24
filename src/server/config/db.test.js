/**
 * @jest-environment node
 */
import mongoose from 'mongoose'
import { dburl } from './db'
import Category from '../models/category'

beforeAll(() => {
	return mongoose.connect(dburl)
})

afterAll(() => {
	return mongoose.disconnect()
})

test('creates a category', (done) => {
	expect.assertions(1)
	Category.create({
		name: 'cats'
	}, (err, cat) => {
		if (err)
			throw(err)
		expect(cat.name).toBe('cats')
		done()
	})
})
