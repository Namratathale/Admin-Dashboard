 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//  environment variables
dotenv.config();

//  routes
const studentRoutes = require('./routes/students');

const app = express();

// Middle ware
app.use(cors());      //  Resource Sharing
app.use(express.json());  //jSON bodies

// Connect  MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

connectDB();

// API 
app.use('/api/students', studentRoutes);

//  port
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Admin server running on port ${PORT}`));
