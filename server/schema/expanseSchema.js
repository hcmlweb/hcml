const  mongoose  = require("mongoose");

const expanseSchema = mongoose.Schema(
    {
        expanseName:String,
        expanseAmount:Number,
        date:{ type: Date, default: Date.now }
        
    }
)

module.exports= expanseSchema;