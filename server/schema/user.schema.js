const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = userSchema;