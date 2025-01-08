const mongoose = require("mongoose");
const lotSchema = require("../schema/lot.schema");

const lotModel = mongoose.model('lot', lotSchema)

module.exports = lotModel;