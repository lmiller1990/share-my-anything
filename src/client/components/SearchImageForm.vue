<template>
	<div>
	<h1 class="jumbotron-header">Share my</h1>
	<form class="form">
		<div class="form-group">
		<input 
			class="form-control form-control-lg"
			v-model="category" 
			placeholder="cats, dogs, friends..." 
			id="query-input" 
			@keyup.enter="enterHandler">
		</div>
		<div class="form-group">
		<button
			class="form-control btn btn-primary btn-lg"
			type="button"
			@click="enterHandler">
			Search
		</button>
		</div>
		<RandomCategories />
	</form>
</div>
</template>

<script>
	import axios from 'axios'
	import RandomCategories from './RandomCategories.vue'
	import * as types from '../store/mutation-types'

	export default {
		data() {
			return {
				category: ''
			}
		},

		methods: {
			enterHandler(e) {
				e.preventDefault()
				this.$store.dispatch('loadCategory', {
					category: this.category
				})
			}
		},

		components: {
			RandomCategories
		}
	}
</script>
