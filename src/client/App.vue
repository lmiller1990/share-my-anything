<template>
	<div>
		Hello Vue with hot reload!!
		<ImageUploader />
		<SharedImage :uri="'...'" :size="175" />
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
</style>
