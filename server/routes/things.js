const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs=require('fs');
const Thing = require('../models/Thing');

const dir = path.join(__dirname, '..', 'uploads', 'things');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/things');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// POST - Add Thing
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, category, subCategory, price, brand, description } = req.body;
    // const image = req.file ? `things/${req.file.filename}` : '';
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null;

    const thing = new Thing({ name, category, subCategory, price, brand, description, image:imagePath});
    await thing.save();
    res.status(201).json(thing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Fetch All
router.get('/', async (req, res) => {
  try {
    const things = await Thing.find();
    res.json(things);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Thing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
