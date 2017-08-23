import Home from './Home.vue'
import { shallow, mount } from 'avoriaz'
import Vue from 'vue'

describe('Home.vue', () => {
	it('enterHandler should be called', () => {
		const wrapper = shallow(Home)
		wrapper.setMethods({ enterHandler: jest.fn() })
		wrapper.find('#query-input')[0].trigger('keyup.enter')
		expect(wrapper.vm.enterHandler.mock.calls.length).toBe(1)
	})

	it('enterHandler should not be called', () => {
		const wrapper = shallow(Home)
		wrapper.setMethods({ enterHandler: jest.fn() })
		wrapper.find('#query-input')[0].trigger('keydown.up')
		expect(wrapper.vm.enterHandler.mock.calls.length).toBe(0)
	})

	it('matches the snapshot', () => {
		const wrapper = mount(Home)
		expect(wrapper.$el).toMatchSnapshot()
	})
})
