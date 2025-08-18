// models/Food.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  subCategory: { type: String },
  price: { type: Number },
  weight: { type: String },
  brand: { type: String },
  description: { type: String },
  image: { type: String }, // Stores filename
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
