import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
  title: String,
  unitPrice: {
    type: Number,
    default: 0,
  }
});

const product = mongoose.model('product', bookSchema)

export default product