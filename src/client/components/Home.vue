<template>
  <div class="main banner container">
		<div>
			Share my
		</div>
		<input v-model="query" placeholder="cat" id="query-input" @keyup.enter="enterHandler">
		<ImageUploader />
		<SharedImage 
			v-for="uuid in images"
	 		key="uuid"
			:uuid="uuid"
			:size="150" 
			:category="category" />
  </div>
</template>

<script>
	import axios from 'axios'
	import ImageUploader from './ImageUploader/ImageUploader.vue'
	import SharedImage from './SharedImage/SharedImage.vue'
	import { getImagesEndpointRoute } from '../../shared/routes'

  export default {
    name: 'Home',

		data() {
			return {
				query: null,
				images: [],
				category: null
			}
		},

		methods: {
			enterHandler(e) {
				axios(getImagesEndpointRoute(this.query))
					.then(res => {
						this.category = res.data.name
						this.images = res.data.images
					})
			}
		},

		components: {
			ImageUploader,
			SharedImage
		}
	}
</script>

<style scoped>
/*.main.banner.container {
	border: 1px solid grey;
	display: flex;
	flex-direction: row;
	font-size: 5em;
	justify-content: space-around;
}*/
</style>
