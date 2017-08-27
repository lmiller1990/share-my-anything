<template>
	<div class="modal fade bd-example-modal" 
			 tabindex="-1" role="dialog" 
			 id="uploader-modal"
			 aria-labelledby="myLargeModalLabel"
			 aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<ImageUploader />
			</div>
		</div>
	</div>
</template>

<script>
	import ImageUploader from './ImageUploader.vue'
	export default {
		name: 'BsModal',

		components: {
			ImageUploader
		}
	}
</script>

<style scoped>
.modal-dialog {
	max-width: 60%;
	padding-top: 5%;
	margin: auto;
}
</style>
