


const User = require('../model/userModel')

const getAlluser = async (req, res) => {
    try {
        const getUser = await User.find()
        if (!getUser) {
            return res.status(404).json({ massage: "No User Found" })
        }
        res.status(200).json(getUser)
    } catch (error) {
        res.status(500).json({ massage: "Internal error" }, error)
    }
}

const createUser = async (req, res) => {
    try {
        const { userName,
            firstName,
            lastName,
            email,
            password } = req.body
        const newUser = new User({
            userName,
            firstName,
            lastName,
            email,
            password,
        })

        const saveUser = await newUser.save()
        res.status(201).json(saveUser)
    } catch (error) {
        res.status(500).json({ massage: "Internal Error" }, error)
    }
}

module.exports = { getAlluser, createUser }