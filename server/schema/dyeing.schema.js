
const mongoose=require('mongoose')
const colorSchema=require('./color.schema')

const dyeingSchema=mongoose.Schema({
    memoNumber:Number,
    partyName:String,
    lotNumber:Number,
    dyeingCatagory:String,
    dyeingColor:String,
    dyeingQty:String,
    dyeingColorConsume:[colorSchema]


})


module.exports=dyeingSchema;