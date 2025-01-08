const Party = require('../model/party.model')

const getAllParty = async (req, res) => {
    try {
        const getParty = await Party.find()
        res.status(200).json(getParty)
    } catch (error) {
        res.status(505).json({ massage: error })
    }


}
const createParty = async (req, res) => {
    try {
        const { partyName } = req.body
        const newParty = new Party({
            partyName,
            date: new Date()
        })
        const saveParty = await newParty.save()
        res.status(201).json(saveParty)
    } catch (error) {
        res.status(505).json({ massage: error })
    }


}

module.exports = { getAllParty, createParty }