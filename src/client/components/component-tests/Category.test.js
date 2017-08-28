import Category from '../Category.vue'
import { mount } from 'avoriaz'
import router from '../../router'
import Vue from 'vue'

describe('Category.vue', () => {
	it('displays the category based on the route params', () => {
		expect.assertions(1)
		const wrapper = mount(Category, { router })

		router.push({ name: 'category', params: { category: 'Cat' } })
		wrapper.update()

		expect(wrapper.find('#category-header')[0].text().trim()).toBe('Category: Cat')
	})
})
