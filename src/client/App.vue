<template>
	<div class="main container">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
.main.container {
	padding-left: 2em;
	padding-right: 2em;
}
</style>
