const mongoose = require('mongoose');

const fabricSchema = mongoose.Schema({
    fabricAmount: Number,
    date: Date
})

module.exports = fabricSchema;