const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // serve static files

app.post('/data', (req, res) => {
  res.send(`Received: ${JSON.stringify(req.body)}`);
});
