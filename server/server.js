const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = require('./app')
const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MONGO_URI;




mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));



    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
    })