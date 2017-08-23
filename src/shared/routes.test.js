import jest from 'jest'
import { 
	createImageEndpointRoute,
	getImagesEndpointRoute
} from './routes'

test('uploadImageEndpoint', () => {
	expect(createImageEndpointRoute()).toBe('/images/create')
})

test('getImagesEndpoint', () => {
	expect(getImagesEndpointRoute()).toBe('/images/:category')
	expect(getImagesEndpointRoute('cats')).toBe('/images/cats')
})
