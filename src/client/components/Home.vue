<template>
  <div>
		<h1 class="jumbotron-header">Share my</h1>
		<form class="form">
			<input 
				class="form-control form-control-lg"
				v-model="query" 
				placeholder="cats, dogs, friends..." 
				id="query-input" 
				@keyup.enter="enterHandler">
			<button
				class="form-control btn btn-primary btn-lg"
				type="button"
				@keyup.enter="enterHandler">
				Search
			</button>
		</form>
		<ImageUploader />
		<div class="container">
			<div class="row">
				<SharedImage 
					v-for="uuid in images"
					key="uuid"
					:uuid="uuid"
					:category="category" />
			</div>
		</div>
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
				images: [
					/*'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',
					'810a5020-8982-11e7-aa12-cbbc4d0abdcb',*/
				],
				category: ''
			}
		},

		methods: {
			enterHandler(e) {
				axios(getImagesEndpointRoute(this.query))
					.then(res => {
						console.log('res', res)
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
</style>
