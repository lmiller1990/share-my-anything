<template>
  <div>
		<img :height="size" src="../../placeholder.png"/>
  </div>
</template>

<script>

  export default {
    name: 'SharedImage',

		props: {
			uri: {
				type: String,
			},
			size: {
				type: Number,
				required: true
			}
		}
  }
</script>

<style scoped>
</style>
