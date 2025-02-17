const mongoose = require("mongoose");

const gojSchema = new mongoose.Schema({
  graGoj: Number,
  finishingGoj: Number,
});

const febricsSchema = new mongoose.Schema({
  listNo: Number,
  febricType: String,
  lotNumber: Number,
  febricColor: String,
  febricCount: [gojSchema],
});

const pakingListSchema = new mongoose.Schema({
  partyName: String,
  address: String,
  pakingNo: Number,
  febrics: [febricsSchema],
});

module.exports = pakingListSchema;
