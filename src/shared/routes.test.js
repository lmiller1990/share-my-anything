import jest from 'jest'
import { createImageEndpointRoute } from './routes'

test('uploadImageEndpoint', () => {
	expect(createImageEndpointRoute()).toBe('/images/create')
})
