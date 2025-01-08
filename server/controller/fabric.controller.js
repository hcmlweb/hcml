const Fabric = require('../model/fabric.model')

const getAllfabric = async (req, res) => {
    try {
        const getFabric = await Fabric.find()
        res.status(200).json(getFabric)
    } catch (error) {
        res.status(500).json({ massage: "Not Found" })
    }
}

const findByDateFabric = async (req, res) => {
    try {
        const startDate = new Date()
        startDate.setHours(0, 0, 0, 0)

        const endDate = new Date()
        endDate.setHours(23, 59, 59, 999)

        const findFabric = await Fabric.find({
            date: {
                $gte: startDate,
                $lte: endDate
            }
        })

        res.status(200).json(findFabric)

    } catch (error) {

        res.status(500).json(error)
    }
}

module.exports = { getAllfabric, findByDateFabric }