const mongoose = require("mongoose");

const mechanicalSchema = mongoose.Schema({
  mechanicalName: String,
  mechanicalQty: Number,
  date: Date,
});
