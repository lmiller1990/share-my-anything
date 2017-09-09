<template>
  <span class="btn btn-info btn-sm" @click="handleClick">
		{{ category }}
  </span>
</template>

<script>
  export default {
    name: 'CategoryLabel',

		props: {
			category: {
				type: String,
				required: true
			}
		},

		methods: {
			handleClick(e) {
				this.$router.push({ 
					name: 'category', params: { category: this.category } 
				})
			}
		}
  }
</script>

<style scoped>
</style>
