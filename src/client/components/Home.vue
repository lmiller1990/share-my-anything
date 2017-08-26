<template>
  <div>
		<BsModal />
		<SearchImageForm />
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
	import SharedImage from './SharedImage.vue'
	import SearchImageForm from './SearchImageForm.vue'
	import BsModal from './BsModal.vue'

  export default {
    name: 'Home',

		computed: {
			category() {
				return this.$store.state.category
			}
		},

		components: {
			SharedImage,
			SearchImageForm,
			BsModal
		}
	}
</script>

<style scoped>
</style>
