<template>
	<div class="modal fade bd-example-modal" 
			 tabindex="-1" role="dialog" 
			 aria-labelledby="myLargeModalLabel"
			 aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<h4>Share yours, too!</h4>
				<ImageUploader />
			</div>
		</div>
	</div>
</template>

<script>
	import ImageUploader from './ImageUploader/ImageUploader.vue'
	export default {
		name: 'BsModal',

		components: {
			ImageUploader
		}
	}
	</script>

	<style scoped>
	</style>
