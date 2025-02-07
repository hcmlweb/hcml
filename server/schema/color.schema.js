const mongoose=require('mongoose')

const colorSchema=mongoose.Schema({
    colorCode:Number,
    colorName:String,
    colorQty:Number,
    date:Date
})

module.exports=colorSchema;
