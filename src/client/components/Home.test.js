import Home from './Home.vue'
import { shallow, mount } from 'avoriaz'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

describe('Home.vue', () => {
	it('matches the snapshot', () => {
		let store = new Vuex.Store({
			state: {
				category: {
					name: '', images: []
				}
			}
		})
		const wrapper = shallow(Home, { store })
		expect(wrapper.$el).toMatchSnapshot()
	})
})
