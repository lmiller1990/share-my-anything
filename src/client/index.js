import 'babel-polyfill'

import Vue from 'vue'
import router from './router'

import App from './App'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

new Vue({
	el: '#app',
	router: router,
	render: h => h(App),
	template: '<App />',
	components: { App }
})
