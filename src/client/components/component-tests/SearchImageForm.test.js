import { shallow } from 'avoriaz'
import SearchImageForm from '../SearchImageForm.vue'

test('enterHandler should not be called', () => {
	const wrapper = shallow(SearchImageForm)
	wrapper.setMethods({ enterHandler: jest.fn() })
	wrapper.find('#query-input')[0].trigger('keydown.up')
	expect(wrapper.vm.enterHandler.mock.calls.length).toBe(0)
})
