const Lot = require('../model/lot.model')
const Fabric = require('../model/fabric.model')
const Delivery = require('../model/delivery.model')


const getAllLot = async (req, res) => {
    try {
        const getLot = await Lot.find()
        if (!getLot) {
            res.status(404).json({ massage: "NOT FOUND" })
        }
        res.status(200).json(getLot)
    } catch (error) {
        res.status(500).json({ massage: "INTERNAl SERVER ERROR" })
    }

}

const createLot = async (req, res) => {
    const localDate= new Date();
    const utcPlusSixHours=new Date(localDate.getTime() + 6 * 60 * 60 * 1000 )
    try {
        const { lotNumber, partyName, date } = req.body;
        const newDateFromClientSide=date;
        const addNewDate=new Date(newDateFromClientSide.getTime() + 6 * 60 * 60 * 1000)
        const newLot = new Lot({
            lotNumber,
            partyName,
            totalFabrics: 0,
            deliverFabrics: 0,
            availableFabrics: 0,
            lotStatus: "Receive Griege",
            date: date
        })
        const saveLot = await newLot.save()
        res.status(201).json(saveLot)
    } catch (error) {
        res.status(500).json({ massage: "Internal Error" })
    }

}

const addFabricToLot = async (req, res) => {
    try {
        const { id } = req.params
        const { fabricAmount,thanQty } = req.body
        const findLot = await Lot.findOne({ _id: id })
        const newFabric = new Fabric({
            fabricAmount,
            thanQty,
            date: new Date()

        })
        await newFabric.save()
        findLot.fabrics.push(newFabric)
        findLot.totalFabrics = findLot.fabrics.reduce((total, fabric) => total + fabric.fabricAmount, 0)
        findLot.availableFabrics = findLot.totalFabrics - findLot.deliverFabrics
        await findLot.save()
        res.status(201).json(findLot)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deliveryFabric = async (req, res) => {
    try {
        const { id } = req.params;
        const { deliveryAmount } = req.body;
        const findLotToDeliver = await Lot.findOne({ _id: id })
        const newDeliver = new Delivery({
            deliveryAmount
        })
        findLotToDeliver.deliveryFabrics.push(newDeliver)
        findLotToDeliver.deliverFabrics = findLotToDeliver.deliveryFabrics.reduce((total, deliver) => total + deliver.deliveryAmount, 0)
        findLotToDeliver.availableFabrics = findLotToDeliver.totalFabrics - findLotToDeliver.deliverFabrics
        if (findLotToDeliver.deliverFabrics != 0) {
            findLotToDeliver.lotStatus = "Delivery Running"
        }
        if (findLotToDeliver.availableFabrics == 0) {
            findLotToDeliver.lotStatus = "Lot Close"
        }
        await findLotToDeliver.save()
        res.status(201).json(findLotToDeliver)
    } catch (error) {
        res.status(500).json({ massage: "Internal Error" })
    }

}




module.exports = { getAllLot, createLot, addFabricToLot, deliveryFabric }