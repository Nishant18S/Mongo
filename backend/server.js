// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection
const authRoutes = require('./routes/auth'); // Auth routes (register, login)

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/api/auth', authRoutes); // API endpoint for auth

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('MongoDB connected');
  console.log(`Server running on port ${PORT}`);
});
