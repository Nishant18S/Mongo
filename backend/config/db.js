const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://nishant:HBu2a7gIRjsQUAHs@register.xohsot9.mongodb.net/?retryWrites=true&w=majority&appName=register');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;