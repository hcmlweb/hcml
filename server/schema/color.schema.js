const mongoose=require('mongoose')

const colorSchema=mongoose.Schema({
    colorName:String,
    colorQty:Number,
    date:Date
})

module.exports=colorSchema;