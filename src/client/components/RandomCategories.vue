<template>
	<div style="margin-top: 2px;">
		<CategoryLabel 
			v-for="category in randomCategories" :category="category.name" key="category._id" />
  </div>
</template>

<script>
	import CategoryLabel from './CategoryLabel.vue'
  export default {
    name: 'RandomCategories',

		created() {
			this.$store.dispatch('loadRandomCategories')
				.then(res => this.randomCategories = res.data)
		},

    data () {
      return {
				randomCategories: []
      }
    },

		components: {
			CategoryLabel
		}
  }
</script>

<style scoped>
.btn {
 	margin: 2px;
}
</style>
