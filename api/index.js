const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/user');
require('dotenv').config()
const app = express ();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', async(req,res) => {
    const {name,email,password} = req.body;
    const userDoc = await UserModel.create({
        name,
        email,
        password,
    });
});

app.listen(4000);