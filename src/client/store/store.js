import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutation-types'
import { getImagesEndpointRoute } from '../../shared/routes'

Vue.use(Vuex)

const state = {
	loadingImagesStatus: null,
	query: null,
	category: {name: '', images: []}
}

const mutations = {
	[types.SET_CATEGORY] (state, {category}) {
		state.category = category
	},

	[types.GET_IMAGES_PENDING] (state) {
		state.loadingImagesStatus = true
	},

	[types.GET_IMAGES_SUCCESS] (state) {
		state.loadingImagesStatus = false
	},

	[types.GET_IMAGES_FAILURE] (state) {
		state.loadingImagesStatus = false
	}
}

const actions = {
	loadCategory({commit}, {category}) {
		axios(getImagesEndpointRoute(category))
		.then(res => {
			commit(types.SET_CATEGORY, {category: res.data})
		})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
}) 
