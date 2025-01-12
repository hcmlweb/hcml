
const mongoose=require('mongoose')
const dyeingSchema=require('../schema/dyeing.schema')

const dyeingModel=mongoose.model('dyeing',dyeingSchema)

module.exports=dyeingModel;