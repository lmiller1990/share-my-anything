import ImageUploader from './ImageUploader.vue'
import Vue from 'vue'

const mountAndClick = (Component) => {
	const ctor = Vue.extend(Component)

	const vm = new ctor()
	vm.$mount

	vm.save = jest.fn()

	console.log(vm)
	vm.$el.querySelector('#save-button').click()

	expect(vm.save.mock.calls.length).toBe(1)
}

describe('ImageUploader.vue', () => {
	/*it('should render a h4 correctly', () => {
		const wrapper = shallow(ImageUploader)
		expect(wrapper.find('.upload.form')[0].text().trim()).toBe('Share')
	})*/

	it('save should return a 200 status', () => {
		expect.assertions(1)

		mountAndClick(ImageUploader)
	})
})
