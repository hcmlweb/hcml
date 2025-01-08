const { default: mongoose } = require("mongoose");
const deliverySchema = require("../schema/delivery.schema");

const deliveryModel = mongoose.model('delivery', deliverySchema)
module.exports = deliveryModel;