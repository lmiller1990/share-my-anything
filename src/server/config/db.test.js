/**
 * @jest-environment node
 */
import mongoose from 'mongoose'
import { dburl } from './db'
import Category from '../models/category'

mongoose.Promise = global.Promise;

beforeAll(() => {
	mongoose.connect(dburl, { useMongoClient: true })
})

afterAll(() => {
	return mongoose.disconnect()
})

beforeEach(() => {
	Category.collection.drop(err => null)
})

test('creates a category with an image', (done) => {
	expect.assertions(2)

	const promise = () => { 
		return new Promise((resolve, reject) => {
			Category.findOrCreate({
				name: 'cats'
			}, (err, cat) => {
				if (err)
					reject(err)
				resolve(cat)
			})
		}) 
	}

	promise().then((cat) => {
		cat.images.push({ link: 'Some cat link' })
		cat.save((err, catWithImage) => {
			expect(catWithImage.name).toBe('cats')
			expect(catWithImage.images.length).toBe(1)
			done()
		})
	})
})
