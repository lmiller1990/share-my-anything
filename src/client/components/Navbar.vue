<template>
	<div>
		<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
			<a class="navbar-brand" href="#" @click="routeHome">Share My...</a>
			<form class="form-inline">
				<button class="btn btn-outline-primary my-2 my-sm-0" type="button"
					data-toggle="modal" data-target=".bd-example-modal">
					Share
				</button>
			</form>
		</nav>
	</div>
</template>

<script>
	import {SET_CATEGORY} from '../store/mutation-types'
	export default {
		name: 'Navbar',

		methods: {
			routeHome() {
				this.$store.commit(SET_CATEGORY, {
					category: {
						images: []
					}
				})
			}
		}
	}
	</script>

	<style scoped>
	</style>
