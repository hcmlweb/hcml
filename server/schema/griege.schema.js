const mongoose=require('mongoose')
const griegeSchema=mongoose.Schema({
lotNumber:{
    type:Number,
    require:true
},
date:Date
})

module.exports=griegeSchema;