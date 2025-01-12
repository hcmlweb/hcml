const mongoose=require('mongoose')

const coorSchema=mongoose.Schema({
    colorName:String,
    colorQty:Number,
    date:Date
})

module.exports=colorName;