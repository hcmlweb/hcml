const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
  date: Date,
  getPass: Number,
  fabricAmount: Number,
  thanQty: Number,
});

module.exports = deliverySchema;
