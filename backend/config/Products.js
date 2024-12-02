import mongoose from "mongoose";
let productsSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  type: String,
  onSale: Boolean,
  trending: Boolean,
  images: Array,
  sizes: Array,
  salePrice: Number,
  price: Number, 
})

export default mongoose.model('products', productsSchema)