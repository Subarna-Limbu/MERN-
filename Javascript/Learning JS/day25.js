const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect('your-mongodb-connection-string-here')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ DB Connection Failed:', err));

// Start server
app.listen(3000, () => console.log('🚀 Server running on port 3000'));
