import mongoose from 'mongoose'
import findOrCreate from 'mongoose-find-or-create'

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	}
})
categorySchema.plugin(findOrCreate)

const Category = mongoose.model('Category', categorySchema)

export default Category

