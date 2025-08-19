const express = require('express');
const app = express();

app.use(express.json());

// Route with simulated error
app.get('/crash', (req, res) => {
  throw new Error('💥 Server crashed intentionally!');
});

// Route with async error
app.get('/async-error', async (req, res, next) => {
  try {
    // simulate error
    let data = await Promise.reject(new Error('Async failed!'));
    res.json(data);
  } catch (err) {
    next(err); // pass to error handler
  }
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error('Error log:', err.message);
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log('Server running on 3000'));
