/**
 * @jest-environment node
 */
import 'babel-polyfill'
import app from './app'
import request from 'supertest'
import { getImagesEndpointRoute } from '../shared/routes'

describe('/images', () => {
	test('it should respond to the GET method', async () => {
		const response = await request(app).get('/images/cats')

		expect(response.statusCode).toBe(200)
	})
})
