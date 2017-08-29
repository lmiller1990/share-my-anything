<template>
  <div>
		<h3 id="category-header">
			Category: {{ $route.params.category }}
		</h3>
  </div>
</template>

<script>
  export default {
    name: 'Category',

		created() {
			this.$store.dispatch('loadCategory', {
				category: this.$route.params.category
			})
		},

		watch: {
		  /*'$route' (to, from) {
				if (to.params.category) {
					this.$store.dispatch('loadCategory', {
						category: to.params.category
					})
				}
			}*/
		}
  }
</script>

<style scoped>
</style>
