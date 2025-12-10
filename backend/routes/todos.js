const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// Get all
router.get('/', async (req, res) => {
try {
const list = await Todo.find().sort({ createdAt: -1 });
res.json(list);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Get one
router.get('/:id', async (req, res) => {
try {
const item = await Todo.findById(req.params.id);
if (!item) return res.status(404).json({ message: 'Not found' });
res.json(item);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Create
router.post('/', async (req, res) => {
try {
const newItem = new Todo(req.body);
const saved = await newItem.save();
res.status(201).json(saved);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// Update
router.put('/:id', async (req, res) => {
try {
const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(updated);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// Delete
router.delete('/:id', async (req, res) => {
try {
await Todo.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
});


module.exports = router;