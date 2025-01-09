const mongoose = require('mongoose');

const fabricSchema = mongoose.Schema({
    fabricAmount: Number,
    thanQty:Number,
    date: Date
})

module.exports = fabricSchema;