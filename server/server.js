// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const jwt = require('jsonwebtoken');

dotenv.config();

// Routes
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/petRoutes');
const foodRoutes = require('./routes/food');
const thingRoutes = require('./routes/things');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/things', express.static(path.join(__dirname, 'uploads/things')));



// Inline Models
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

const paymentSchema = new mongoose.Schema({
  name: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});
const Payment = mongoose.model('Payment', paymentSchema);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/things', thingRoutes);

// Default Test Route
app.get('/', (req, res) => {
  res.send('API running...');
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Payment Route
app.post('/api/payment', async (req, res) => {
  const { name, cardNumber, expiry, cvv, amount } = req.body;
  try {
    const payment = new Payment({ name, cardNumber, expiry, cvv, amount });
    await payment.save();
    res.status(201).json({ message: 'Payment saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save payment' });
  }
});

// JWT Auth Middleware
const auth = (req, res, next) => {
  const header = req.headers['authorization'];
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected Profile Route
app.get('/api/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Profile fetch failed' });
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`✅ MongoDB connected`);
}).catch(err => {
  console.error(`❌ MongoDB connection error:`, err);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
