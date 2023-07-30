import mongoose from "mongoose";

const Product = new mongoose.Schema({
  user: { type: String, required: true },
  amazonChoice: Boolean,
  amazonPrime: Boolean,
  asin: String,
  bestSeller: Boolean,
  image: {
    url: String,
    description: String,
  },
  name: String,
  position: Number,
  price: {
    discounted: Boolean,
    priceSymbol: String,
    currentPrice: Number,
    priceFraction: String,
  },
  sponsored: Boolean,
  url: String,
});

const ProductSchema = mongoose.model("Product", Product);

export default ProductSchema;
