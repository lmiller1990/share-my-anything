import jest from 'jest'
import { uploadImageEndpoint } from './routes'

test('uploadImageEndpoint', () => {
	expect(uploadImageEndpoint()).toBe('/images/create')
})
