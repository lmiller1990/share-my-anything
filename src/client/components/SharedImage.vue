<template>
  <div class="col-sm-3">
		<img class="fitted" :src="getURL"/>
  </div>
</template>

<script>
	import { AWS_BUCKET_ROOT_URL } from '../../shared/config'
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
		},

		computed: {
			getURL() {
				return `${AWS_BUCKET_ROOT_URL}${this.category}/${this.uuid}`
			}
		}
  }
</script>

<style scoped>
.fitted {
	max-width: 100%;
	min-width: 100%;
}
</style>
