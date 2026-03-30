require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server bound to 0.0.0.0, running on port ${PORT}`);
});
