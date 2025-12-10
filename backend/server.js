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


mongoose.connect('mongodb://127.0.0.1:27017/mernstack_crud').then(() => {
    console.log('DB connected');
})
.catch((error) => {
    console.log(error);
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});