import mongoose from 'mongoose'
import findOrCreate from 'mongoose-find-or-create'

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

categorySchema.plugin(findOrCreate)

const Category = mongoose.model('Category', categorySchema)

export default Category

