import mongoose from 'mongoose'
import findOrCreate from 'mongoose-find-or-create'
import random from 'mongoose-simple-random'

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	images: {
		type: Array,
		default: []
	}
})

categorySchema.plugin(random)
categorySchema.plugin(findOrCreate)

const Category = mongoose.model('Category', categorySchema)

export default Category

