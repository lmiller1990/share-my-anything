<template>
  <div>
		<form enctype="multipart/form-data">
			<input type="file" 
				name="image"
				@change="onImageChange"
				multiple
				>
		</form>
		<!--<input v-on:change="onImageChanged" type="file" name="image">
		<input type="button" @click="upload" value="Share with Vue">-->
  </div>
</template>

<script>
	import 'isomorphic-fetch'
	import { uploadImageEndpoint } from '../../shared/routes'

  export default {
    name: 'ImageUploader',

		methods: {
			onImageChange(e) {
				const fieldName = e.target.name
				const fileList = e.target.files
				const formData = new FormData()
				
				console.log(fileList, e.target.files)
				if (!fileList.length) return;
				// append the files to FormData
				Array
					.from(Array(fileList.length).keys())
					.map(x => {
						formData.append(fieldName, fileList[x], fileList[x].name)
					});

				// save
				this.save(formData)
			},

			save(formData) {
				fetch(uploadImageEndpoint(), { 
					method: 'POST', 
					body: formData
				})
			},

			onImageChanged(e) {
				const files = e.target.files || e.dataTransfer.files
				if (!files.length) 
					return
				console.log(files)
				this.createImage(files[0])
			},
			createImage(file) {
				const reader = new FileReader()
				const vm = this
				
				reader.onload = (e) => {
					console.log('here')
					vm.image = e.target.result
					console.log(e.target.result)
					console.log(vm.image)
				}

				reader.readAsDataURL(file)
			},
			upload(e) {
				console.log('ok', e)
				/* return fetch(uploadImageEndpoint(), { method: 'GET' })
					.then((res) => {
						if (!res.ok) throw Error(res.statusText)
						return res.json()
					})
					.then((data) => {
						if (!data.msg) {
							throw Error('No msg received')
						} else {
							console.log(data.msg)
						}
					}) */
			}
		}
  }
</script>

<style scoped>
</style>
