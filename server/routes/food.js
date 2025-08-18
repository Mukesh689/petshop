// routes/food.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Food = require('../models/Food');

// Ensure uploads/food directory exists
const dir = path.join(__dirname, '..', 'uploads', 'food');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/food'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// POST /api/foods
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, category, subCategory, price, weight, brand, description } = req.body;
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null;

    const food = new Food({
      name,
      category,
      subCategory,
      price,
      weight,
      brand,
      description,
      image: imagePath
    });

    await food.save();
    res.status(201).json({ message: 'Food item added', food });
  } catch (err) {
    res.status(500).json({ error: 'Food upload failed', details: err.message });
  }
});

// GET /api/foods
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
});

// DELETE /api/foods/:id
router.delete('/:id', async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: 'Food deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
