<template>
  <div>
		<img :height="size" src="../../placeholder.png"/>
  </div>
</template>

<script>
	import { AWS_BUCKET_ROOT_URL } from '../../../shared/config'
  export default {
    name: 'SharedImage',

		props: {
			uuid: {
				type: String,
				required: true
			},
			category: {
				type: String,
				required: true
			},
			size: {
				type: Number,
				required: true
			}
		},

		computed: {
			getURL() {
				return `${AWS_BUCKET_ROOT_URL}${this.category}/${this.uuid}`
			}
		}
  }
</script>

<style scoped>
</style>
