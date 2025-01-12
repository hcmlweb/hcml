
const mongoose=require('mongoose')

const dyeingSchema=mongoose.Schema({
    memoNumber:Number,
    partyName:String,
    lotNumber:Number,
})


module.exports=dyeingSchema;