const mongoose=require('mongoose')

const griegeSchema=require('../schema/griege.schema')

const griegeModel=mongoose.model('griege',griegeSchema)
module.exports=griegeModel;