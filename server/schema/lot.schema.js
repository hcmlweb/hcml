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
    deliverFabrics: Number,
    availableThan:Number,
    date: Date,
    fabrics: [fabricSchema],
    deliveryFabrics: [{
        fabricAmount:Number,
        thanQty:Number
    }],
})

module.exports = lotSchema;
