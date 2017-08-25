import 'babel-polyfill'

import Vue from 'vue'

import App from './App'
import store from './store/store'
import router from './router'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

import 'bootstrap'

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App),
})
