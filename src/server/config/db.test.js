/**
 * @jest-environment node
 */
import mongoose from 'mongoose'
import { testdburl } from './db'
import Category from '../models/category'
import 'babel-polyfill'

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

test('creates a category with an image', (done) => {
  expect.assertions(2)

  const promise = () => { 
    return new Promise((resolve, reject) => {
      Category.create({
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

