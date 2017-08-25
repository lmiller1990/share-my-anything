<template>
	<div>
		<Navbar />
		<div id="main-body" class="jumbotron text-center">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue'
	export default {
		name: 'app',

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
