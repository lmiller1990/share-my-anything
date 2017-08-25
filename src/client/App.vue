<template>
	<div id="main-body" class="jumbotron text-center">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>

#main-body {
	max-width: 968px;
	margin: 0 auto !important;
}
</style>
