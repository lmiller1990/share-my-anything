import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutation-types'
import { 
	getImagesEndpointRoute,
	getCategoriesEndpointRoute
} from '../../shared/routes'

Vue.use(Vuex)

const state = {
	displayFlash: false,
	category: {name: '', images: []}
}

const mutations = {
	[types.SET_CATEGORY] (state, {category}) {
		state.category = category
	},

	[types.DISPLAY_FLASH] (state, visible) {
		state.displayFlash = visible
	}
}

const actions = {
	loadCategory({commit}, {category}) {
		axios(getImagesEndpointRoute(category))
		.then(res => {
			commit(types.SET_CATEGORY, {category: res.data})
		})
	},

	loadRandomCategories({commit}) {
		return new Promise((resolve, reject) => {
			axios(getCategoriesEndpointRoute(8))
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
}) 
