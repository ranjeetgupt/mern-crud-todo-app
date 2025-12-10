const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


const todoRoutes = require('./routes/todos');
app.use('/api/todo', todoRoutes);


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})
.catch((err) => console.error(err));