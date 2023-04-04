import mongoose from 'mongoose'

const Product = new mongoose.Schema({
    product: {},
    event: {type: String},
    person: {type: String},
})

const ProductSchema = mongoose.model('Product', Product)

export default ProductSchema