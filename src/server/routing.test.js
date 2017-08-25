/**
 * @jest-environment node
 */
import 'babel-polyfill'
import mongoose from 'mongoose'
import Category from './models/category'

import { dburl } from './config/db'

mongoose.Promise = global.Promise;

beforeAll((done) => {
  mongoose.connect(dburl, { useMongoClient: true }, (err) => {
    if (err)
      throw new Error(err)
    console.log('connected')
    done()
  })
})

afterAll((done) => {
  mongoose.disconnect((err, db) => {
    if (err)
       throw new Error(err)
    console.log('disconnected')
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
  console.log('Creating two')
  expect.assertions(1)
  const createCategories = (categoryName) => {
    return new Promise((resolve, reject) => {
      console.log('Here we go')
      Category.create({
        name: categoryName
      }, (err, model) => {
        if (err) 
          reject(err)
        resolve(model)
      })
    })
  }

  createCategories('cats').then((model) => {
    console.log(model)
    expect(model.name).toBe('cats')
    done()
  })
})
