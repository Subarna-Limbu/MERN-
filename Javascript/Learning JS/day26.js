// Add a new grocery item
app.post('/grocery', async (req, res) => {
  try {
    const item = new Grocery(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
