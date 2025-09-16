require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

// --- Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected...');
    app.listen(PORT, () => console.log(`Admin server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// --- Middleware ---
app.use(express.json());

// --- API Routes ---
app.use('/api/students', studentRoutes);

