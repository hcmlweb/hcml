const { default: mongoose } = require("mongoose");
const fabricSchema = require("../schema/fabric.schema");

const fabricModel = mongoose.model('fabric', fabricSchema)
module.exports = fabricModel;