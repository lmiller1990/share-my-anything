<template>
  <div class="main banner container">
		<div>
			Share my
		</div>
		<input v-model="query" placeholder="cat" id="query-input" @keyup.enter="enterHandler">
  </div>
</template>

<script>
	import axios from 'axios'
	import { getImagesEndpointRoute } from '../../shared/routes'

  export default {
    name: 'Home',

		data() {
			return {
				query: null
			}
		},

		methods: {
			enterHandler(e) {
				axios(getImagesEndpointRoute(this.query))
					.then(res => console.log(res))
			}
		}
	}
</script>

<style scoped>
.main.banner.container {
	border: 1px solid grey;
	display: flex;
	flex-direction: row;
	font-size: 5em;
	justify-content: space-around;
}
</style>
