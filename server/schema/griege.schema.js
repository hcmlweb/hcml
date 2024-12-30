const mongoose=require('mongoose')
const griegeSchema=mongoose.Schema({
lotNumber:{
    type:Number,
    require:true
},
date:{
    type:date,
}
}
)

module.exports=griegeSchema;