const mongoose = require('mongoose');

const colorDemandSchema = mongoose.Schema({
    demands: [{
        colorName: String,
        colorQty: Number
    }]
})

module.exports = colorDemandSchema;