const Demand = require('../model/color.demand.model')
const Color = require('../model/color.model')


const getAllDemand = async (req, res) => {
    try {
        const getDemand = await Demand.find()
        res.status(200).json(getDemand)
    } catch (error) {
        res.status(404).json({ massage: "Not Available" })
    }
}

const createDemand = async (req, res) => {
    const { colorName, colorQty } = req.body;
    try {

        const color = Color.findOne({ colorName })
        if (color) {
            color.colorQty -= colorQty
            await color.save()
        }

        const colorDemand = new Demand({
            colorName,
            colorQty
        })
        const saveDemand = await colorDemand.save()
        res.status(201).json(saveDemand)
    } catch (error) {
        res.status(404).json({ massage: "Not Found" })
    }
}


module.exports = { getAllDemand, createDemand }