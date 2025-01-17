const mongoose = require('mongoose');

const colorDemandSchema = mongoose.Schema({
    colorName: String,
    colorQty: Number
})

module.exports = colorDemandSchema;