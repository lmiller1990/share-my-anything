import ImageUploader from '../ImageUploader.vue'
import { shallow, mount } from 'avoriaz'
import Vue from 'vue'

describe('ImageUploader.vue', () => {
	it('save should return a 200 status', () => {
		const wrapper = mount(ImageUploader, {
			propsData: {
				imageChosen: true,
				category: "something"
			}
		})
		wrapper.update()
		const saveMock = jest.fn()
		wrapper.setMethods({ save: saveMock })

		wrapper
		wrapper.find('#save-button')[0].trigger('click')
		expect(saveMock.mock.calls.length).toBe(1)
	})

	it('change should trigger onImageChange to be called', () => {
		const wrapper = shallow(ImageUploader)
		const change = jest.fn()
		wrapper.setMethods({ onImageChange: change })

		wrapper.find('#image-button')[0].trigger('change')
		expect(change.mock.calls.length).toBe(1)
	})

	it('matches the snapshot', () => {
		const wrapper = mount(ImageUploader)
		expect(wrapper.$el).toMatchSnapshot()
	})
})
