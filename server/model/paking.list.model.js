const mongoose = require("mongoose");
const pakingListSchema = require("../schema/paking.list.schema");

const pakingListModel = mongoose.model("pakinglist", pakingListSchema);

module.exports = pakingListModel;
