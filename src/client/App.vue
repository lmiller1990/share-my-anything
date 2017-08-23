<template>
	<div class="main container">
		<!--<ImageUploader />
		<SharedImage :uri="'...'" :size="175" />-->
		<router-view></router-view>
	</div>
</template>

<script>
	import ImageUploader from './components/ImageUploader/ImageUploader'
	import SharedImage from './components/SharedImage/SharedImage'
	export default {
		name: 'app',

		components: {
			ImageUploader,
			SharedImage,
		}
	}
</script>

<style>
.main.container {
	padding-left: 2em;
	padding-right: 2em;
}
</style>
