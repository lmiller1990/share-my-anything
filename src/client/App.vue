<template>
	<div>
		<Navbar />

		<div v-show="$store.state.displayFlash" class="alert alert-info alert-dismissable" role="alert">
			Thanks for sharing your image!
		</div>

		<div id="main-body" class="jumbotron text-center">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue'
	import * as types from './store/mutation-types'

	export default {
		name: 'app',

		methods: {
			hideFlash() {
				this.$store.commit(types.DISPLAY_FLASH, false)
			}
		},

		components: {
			Navbar
		}
	}
</script>

<style>

#main-body {
	max-width: 968px;
	margin: 0 auto !important;
}
</style>
