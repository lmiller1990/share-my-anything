import Category from '../Category.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'
import router from '../../router'

Vue.use(Vuex)

let store;

beforeEach(() => {
	console.log('calling..')
	store = new Vuex.Store({
		state: {},
		actions: {
			loadCategory: jest.fn()	
		}
	})
})

test('displays the category based on the route params', () => {
	expect.assertions(1)

	const wrapper = mount(Category, { 
		router,
		store
	})

	router.push({ name: 'category', params: { category: 'Cat' } })
	wrapper.update()

	expect(wrapper.find('#category-header')[0].text().trim())
		.toBe('Category: Cat')
})

test('retrieves images based on current route on created hook', () => {
	expect.assertions(2)

	const wrapper = mount(Category, { 
		router,
		store
	})

	router.push({ name: 'category', params: { category: 'Cat' } })
	wrapper.update()

	console.log(store._actions)
	expect(store._actions.loadCategory.mock.calls.length).toBe(1)
	expect(wrapper.find('#category-header')[0].text().trim())
		.toBe('Category: Cat')
})
