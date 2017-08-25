/**
 * @jest-environment node
 */
import mongoose from 'mongoose'
import { testdburl } from './db'
import Category from '../models/category'

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

