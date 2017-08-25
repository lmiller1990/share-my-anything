<template>
  <div>
		<SearchImageForm />
		<!--<ImageUploader />-->
		<div class="container">
			<div class="row">
				<SharedImage 
					v-for="uuid in category.images"
					key="uuid"
					:uuid="uuid"
					:category="category.name" />
			</div>
		</div>
  </div>
</template>

<script>
	import ImageUploader from './ImageUploader/ImageUploader.vue'
	import SharedImage from './SharedImage/SharedImage.vue'
	import SearchImageForm from './SearchImageForm.vue'

  export default {
    name: 'Home',

		computed: {
			category() {
				return this.$store.state.category
			}
		},

		components: {
			ImageUploader,
			SharedImage,
			SearchImageForm
		}
	}
</script>

<style scoped>
</style>
