require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5001;

// --- IMPORTANT: CORS Configuration for Production ---
// List of URLs that are allowed to make requests to this server
const allowedOrigins = [
  'http://localhost:3000', // For local development
  'https://admin-dashboard-mu-jet.vercel.app/' // <-- IMPORTANT: Replace with your actual Vercel URL
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// --- Database Connection ---
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


