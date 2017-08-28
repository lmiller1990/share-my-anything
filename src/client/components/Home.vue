<template>
  <div>
		<BsModal />
		<SearchImageForm />
		<div class="container">
			<div class="row">
				<Category />
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
	import Category from './Category.vue'
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
			BsModal,
			Category
		}
	}
</script>

<style scoped>
</style>
