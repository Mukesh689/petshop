const express = require('express');
const router = express.Router();
const multer = require('multer');
const Pet = require('../models/Pet');
const path = require('path');

// Local image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  }
});
const upload = multer({ storage });

// GET all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new pet
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const pet = new Pet({
      name: req.body.name,
      breed: req.body.breed,
      price: req.body.price,
      age: req.body.age,
      category: req.body.category,
      subCategory: req.body.subCategory,
      description: req.body.description,
      image: 'uploads/' + req.file.filename,
    });
    await pet.save();
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Correct DELETE route
router.delete('/:id', async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting pet' });
  }
});

module.exports = router;
