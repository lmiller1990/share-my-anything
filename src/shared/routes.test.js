import jest from 'jest'
import { 
	createImageEndpointRoute,
	getImagesEndpointRoute,
	getCategoriesEndpointRoute
} from './routes'

test('uploadImageEndpoint', () => {
	expect(createImageEndpointRoute()).toBe('/images/create')
})

test('getImagesEndpoint', () => {
	expect(getImagesEndpointRoute()).toBe('/images/:category')
	expect(getImagesEndpointRoute('cats')).toBe('/images/cats')
})

test('getCategoriesEndpoint', () => {
	expect(getCategoriesEndpointRoute(2)).toBe('/categories?count=2')
})
