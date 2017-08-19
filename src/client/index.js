import 'babel-polyfill'

import Vue from 'vue'

import App from './App'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

new Vue({
	el: '#app',
	render: h => h(App),
	template: '<App />',
	components: { App }
})
