const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: String,
  discountedPrice: Number,
  price: Number,
  description: String,
  longDesc: String,
  images: {
    type: [String],
    default: [],
  },
  productPic: String,
  reviews: Number,
  orders: Number,
  rate: Number,
  category: String,
  isFreeShipping: Boolean,
  isRecommended: Boolean,
  isDeal: Boolean,
  isSuggested: Boolean,
  label: String,
  features: {
    type: Map,
    of: String,
    default: {},
  },
  inStock: Boolean,
});

module.exports = mongoose.model("Product", ProductSchema);
