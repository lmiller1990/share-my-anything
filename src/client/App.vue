<template>
	<div>
		Hello Vue with hot reload!!
		<ImageUploader />
	</div>
</template>

<script>
	import ImageUploader from './components/ImageUploader/ImageUploader'
	export default {
		name: 'app',
		components: {
			ImageUploader
		}
	}
</script>

<style>
</style>
