const mongoose = require('mongoose')
const colorDemandSchema = require('../schema/dyeing.color.demand')

const colorDemandModel = mongoose.model('dayingcolor', colorDemandSchema)

module.exports = colorDemandModel;