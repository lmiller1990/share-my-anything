import SharedImage from '../SharedImage.vue'
import { shallow } from 'avoriaz'
import { AWS_BUCKET_ROOT_URL } from '../../../shared/config.js'
import Vue from 'vue'

describe('SharedImage.vue', () => {
	it('computes the url for an image', () => {
		expect.assertions(1)

		const wrapper = shallow(SharedImage, {
			propsData: {
				uuid: '123uuid', 
				category: 'cats',
				size: 150
			}
		})

		expect(wrapper.vm.getURL).toBe(AWS_BUCKET_ROOT_URL + 'cats/123uuid')
	})
})
