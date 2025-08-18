const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  price: Number,
  age: String,
  category: String,
  subCategory: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Pet', petSchema);
