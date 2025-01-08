const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
    deliveryAmount: Number,
})

module.exports = deliverySchema;