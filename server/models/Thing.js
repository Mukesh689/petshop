const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  subCategory: { type: String },
  price: { type: Number },
  brand: { type: String },
  description: { type: String },
  image: { type: String }, // Stores filename
}, { timestamps: true });
  
  
  

module.exports = mongoose.model('Thing', thingSchema);
