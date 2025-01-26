const mongoose = require("mongoose");
const fabricSchema = require('./fabric.schema');
const deliverySchema = require("./delivery.schema");

const lotSchema = mongoose.Schema({
    partyName: String,
    lotNumber: Number,
    griegeLength:Number,
    finishingLength:Number,
    totalFabrics: Number,
    totalReceivedThan:Number,
    totalDeliveredThan:Number,
    lotStatus: String,
    availableThan:Number,
    date: Date,
    fabrics: [fabricSchema],
    deliveryFabrics: [deliverySchema],
})

module.exports = lotSchema;
