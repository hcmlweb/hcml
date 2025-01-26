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
    try {
        const {date, lotNumber, partyName, griegeLength, finishingLength, totalFabrics, totalReceivedThan,  } = req.body;
        const newLot = new Lot({
            lotNumber,
            partyName,
            griegeLength,
            finishingLength,
            totalFabrics,
            totalReceivedThan,
            totalDeliveredThan:0,
            deliveryFabrics:[],
            lotStatus: "Receive Griege",
            date: new Date(date)
        })
        const saveLot = await newLot.save()
        res.status(201).json(saveLot)
    } catch (error) {
        res.status(500).json({ massage: "Internal Error" })
    }

}

const deliveryFabric = async (req, res) => {
    try {
        const { id } = req.params;
        const { fabricAmount, thanQty } = req.body;

        const findLot = await Lot.findOne({ _id: id });
        // Add delivery
        const newDeliver = new Delivery({ fabricAmount, thanQty }); // Assuming proper schema validation
        findLot.deliveryFabrics.push(newDeliver);
        // Update calculations
   
        await findLotToDeliver.save();
        res.status(201).json(findLot);

    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Error" });
    }
};

module.exports = { getAllLot, createLot, addFabricToLot, deliveryFabric }
