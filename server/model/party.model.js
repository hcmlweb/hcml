const mongoose = require('mongoose')
const partySchema = require('../schema/party.schema')
const partyModel = mongoose.model("party", partySchema)
module.exports = partyModel;