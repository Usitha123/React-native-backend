require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';  // Default to local MongoDB URI if not set

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// API endpoint to fetch all canteens data without using a schema
app.get('/api/canteens', async (req, res) => {
  try {
    const canteens = await mongoose.connection.db.collection('canteens').find().toArray();
    res.json(canteens);
  } catch (err) {
    console.error('Error fetching canteens:', err);  // Log the actual error
    res.status(500).json({ message: 'Error fetching canteens data', error: err });  // Send more detailed error
  }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
