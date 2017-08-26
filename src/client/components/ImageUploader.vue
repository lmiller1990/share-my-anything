<template>
  <div id="upload-form">
		<form class="form-inline" enctype="multipart/form-data">
				<label class="btn btn-default btn-primary">
					Click to share yours!
					<input type="file" 
						id="image-button" name="image" 
						@change="onImageChange" hidden>
				</label>

			<input 
			  v-if="imageChosen" 
				v-model="category" 
				placeholder="category..."
				class="form-control form-control-lg" 
				name="category">

			<button 
				v-show="imageChosen && category"
				id="save-button"
				class="btn btn-default btn-lg"
				@click="save">
				Share
			</button>

		</form>
  </div>
</template>

<script>
	import 'isomorphic-fetch'
	import { createImageEndpointRoute } from '../../shared/routes'

  export default {
    name: 'ImageUploader',

		data() {
			return {
				imageChosen: false,
				formData: null,
				category: null
			}
		},

		methods: {
			onImageChange(e) {
				const fieldName = e.target.name
				const fileList = e.target.files
				const fd = new FormData()
				
				if (!fileList.length) {
					this.imageChosen = false
					return
				}
				this.imageChosen = true

				fd.append(fieldName, fileList[0], fileList[0].name)
				this.formData = fd

				return fd
			},

			save(evt) {
				evt.preventDefault()
				this.formData.append('category', this.category)

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
#upload-form {
	padding: 7px;
}
</style>
