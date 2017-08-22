<template>
  <div>
		<div class="upload container">
			<h4 class="upload form">
				Share
			</h4>
			<form enctype="multipart/form-data">
				<input type="file" name="image" @change="onImageChange">
				<input type="button" id="save-button" @click="save" value="Submit">
			</form>
		</div>
  </div>
</template>

<script>
	import 'isomorphic-fetch'
	import { createImageEndpointRoute } from '../../../shared/routes'

  export default {
    name: 'ImageUploader',

		data() {
			return {
				imageChosen: false,
				formData: null
			}
		},

		methods: {
			onImageChange(e) {
				const fieldName = e.target.name
				const fileList = e.target.files
				const fd = new FormData()
				
				if (!fileList.length) 
					return;

				fd.append(fieldName, fileList[0], fileList[0].name)
				this.formData = fd

				return fd
			},

			save() {
				console.log('SSAVEEEE')
				fetch(createImageEndpointRoute(), { 
					method: 'POST', 
					body: this.formData
				})
				.then((res) => {
					if (!res.ok) throw Error('Error', res)
					return res.status
				})
				.then((data) => {
					console.log(data)
					return data
				})
			},
		}
  }
</script>

<style scoped>
</style>
