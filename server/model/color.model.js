const mongoose=require('mongoose')
const colorSchema = require('../schema/color.schema')
const colorModel=mongoose.model('color',colorSchema)
module.exports={colorModel}