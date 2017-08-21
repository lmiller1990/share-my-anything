import jest from 'jest'
import ImageUploader from './ImageUploader.vue'
import Vue from 'vue'

const doTest = (Component) => {
	const vm = new Vue({
		el: document.createElement('div'),
		render: h => h(Component)
	})

	expect(vm.$el.querySelector('.upload.form').textContent.trim()).toEqual('Share')
}

describe('ImageUploader.vue', () => {
	it('should render correctly', () => {
		doTest(ImageUploader)
	})
})
