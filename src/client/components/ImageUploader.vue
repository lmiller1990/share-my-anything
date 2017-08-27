<template>
  <div id="upload-form">
		<form class="form" enctype="multipart/form-data">
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
				id="category-input"
				class="form-control" 
				name="category">

			<button 
				v-show="imageChosen && category"
				id="save-button"
				class="btn btn-default btn-primary"
				@click="save">
				Share
			</button>

			<div v-if="loading"
				class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
				aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
			</div>

		</form>

  </div>
</template>

<script>
	import 'isomorphic-fetch'
	import axios from 'axios'
	import { createImageEndpointRoute } from '../../shared/routes'

  export default {
    name: 'ImageUploader',

		data() {
			return {
				imageChosen: false,
				formData: null,
				category: '',
				loading: false
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
				this.loading = true

				this.formData.append('category', this.category)
				axios.post(createImageEndpointRoute(), 
					this.formData
				).then(() => {
					this.loading = false
					$('#uploader-modal').modal('hide')
				})
			},
		}
  }
</script>

<style scoped>
#upload-form {
	padding: 7px;
}
.btn {
	width: 100%;
}

#category-input {
	margin-bottom: 8px;
}

.progress-bar {
	margin-top: 8px;
}
</style>
