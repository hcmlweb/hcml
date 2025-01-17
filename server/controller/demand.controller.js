const Demand = require('../model/color.demand.model')
const Color = require('../model/color.model')


const getAllDemand = async (req, res) => {
    try {
        // const getDemand = await Demand.find()
        const allColor = await Color.find()
        res.status(200).json(getDemand, allColor)
    } catch (error) {
        res.status(404).json({ massage: "Not Available" })
    }
}

const createDemand = async (req, res) => {

    try {
        const { colorName, colorQty } = req.body;
        const color = Color.findOne({ colorName: colorName })
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