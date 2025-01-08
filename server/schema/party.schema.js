const mongoose = require('mongoose')
const partySchema = mongoose.Schema({
    partyName: String,
    date: Date
})

module.exports = partySchema;