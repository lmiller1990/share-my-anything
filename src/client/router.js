import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from './components/Category.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ 
			path: '/', 
			component: Home,
			children: [
				{
					name: 'category',
					path: '/:category',
					component: Category
				}
			]
		}
	]
})

export default router
