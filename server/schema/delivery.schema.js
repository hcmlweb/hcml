const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
    fabricAmount: Number,
    thanQty: Number
})

module.exports = deliverySchema;