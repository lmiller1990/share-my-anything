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
	import SearchImageForm from './SearchImageForm.vue'
	import BsModal from './BsModal.vue'
	import {SET_CATEGORY} from '../store/mutation-types'

  export default {
    name: 'Home',

		computed: {
			category() {
				return this.$store.state.category
			}
		},

		watch: {
		  '$route' (to, from) {
				if (to.params.category) {
					console.log(`Fetching ${this.$route.params.category}`)
					this.$store.dispatch('loadCategory', {
						category: this.$route.params.category
					})
				} else {
					this.$store.commit(SET_CATEGORY, { 
						category: {
							images: []
						}
					})
				}
			}
		},

		components: {
			SharedImage,
			SearchImageForm,
			BsModal,
		}
	}
</script>

<style scoped>
</style>
