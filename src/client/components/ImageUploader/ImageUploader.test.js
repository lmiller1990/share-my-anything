import ImageUploader from './ImageUploader.vue'
import { shallow } from 'avoriaz'
import Vue from 'vue'

describe('ImageUploader.vue', () => {
	/*it('should render a h4 correctly', () => {
		const wrapper = shallow(ImageUploader)
		expect(wrapper.find('.upload.form')[0].text().trim()).toBe('Share')
	})*/

	it('save should return a 200 status', () => {
		const wrapper = shallow(ImageUploader)
		const saveMock = jest.fn()
		wrapper.vm.save = saveMock
		wrapper.update()

		wrapper.find('#save-button')[0].trigger('click')
		expect(saveMock.mock.calls.length).toBe(1)
	})
})
