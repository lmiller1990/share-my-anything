/**
 * @jest-environment node
 */
import 'babel-polyfill'
import mongoose from 'mongoose'
import { dburl } from './config/db'
import app from './app'
import request from 'supertest'
import { getImagesEndpointRoute } from '../shared/routes'

mongoose.Promise = global.Promise;

beforeAll(() => {
	mongoose.connect(dburl, { useMongoClient: true })
})

afterAll(() => {
	return mongoose.disconnect()
})

test('it should respond to the GET method', (done) => {
	expect.assertions(1)
	request(app).get('/images/cats')
		.then(response => {
			expect(response.status).toBe(200)
			done()
		})
})
