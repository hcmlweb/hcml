const mongoose = require('mongoose');

const colorDemandSchema = mongoose.Schema({
    memoNumber: Number,
    lotNumber: Number,
    partyName: String,
    availableGriege: Number,
    dayingAmout: Number,
    disignName: String,
    disignColor: String,
    masterName: String,
    demands: [{
        colorName: String,
        colorQty: Number
    }],
    date: Date
})

module.exports = colorDemandSchema;