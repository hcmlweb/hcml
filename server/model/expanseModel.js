const mongoose = require("mongoose");
const expanseSchema = require("../schema/expanseSchema");

const expanseModel = mongoose.model('expanse', expanseSchema)

module.exports=expanseModel;