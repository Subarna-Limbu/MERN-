const express = require('express');
const app = express();

// Fake API key
const API_KEY = 'mysecretkey123';

// Middleware to check API key
function checkApiKey(req, res, next) {
  const key = req.headers['x-api-key'];
  if (key === API_KEY) {
    next(); // allow
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
}

app.use(express.json());

// Protected route
app.get('/secret-data', checkApiKey, (req, res) => {
  res.json({ data: 'This is top secret 🚀' });
});

app.listen(3000, () => console.log('Server running on 3000'));
