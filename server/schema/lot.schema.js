const mongoose = require("mongoose");
const fabricSchema = require('./fabric.schema');
const deliverySchema = require("./delivery.schema");

const lotSchema = mongoose.Schema({
    lotNumber: Number,
    lotStatus: String,
    partyName: String,
    totalFabrics: Number,
    deliverFabrics: Number,
    availableFabrics: Number,
    date: Date,
    fabrics: [fabricSchema],
    deliveryFabrics: [deliverySchema],



})

module.exports = lotSchema;