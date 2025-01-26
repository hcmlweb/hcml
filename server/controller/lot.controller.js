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
            deliverFabrics: 0,
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

const addFabricToLot = async (req, res) => {
    try {
        const { id } = req.params
        const { fabricAmount, thanQty } = req.body
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
        const { fabricAmount, thanQty } = req.body;

        // Input validation
        if (!fabricAmount || fabricAmount <= 0 || !thanQty || thanQty <= 0) {
            return res.status(400).json({ message: "Invalid input values" });
        }

        const findLotToDeliver = await Lot.findOne({ _id: id });

        if (!findLotToDeliver) {
            return res.status(404).json({ message: "Lot not found" });
        }

        // Add delivery
        const newDeliver = new Delivery({ fabricAmount, thanQty }); // Assuming proper schema validation
        findLotToDeliver.deliveryFabrics.push(newDeliver);

        // Update calculations
        const totalDelivered = findLotToDeliver.deliveryFabrics.reduce(
            (total, deliver) => total + deliver.fabricAmount,
            0
        );
        findLotToDeliver.deliverFabrics = totalDelivered;
        findLotToDeliver.availableFabrics = findLotToDeliver.totalFabrics - totalDelivered;

        // Validate available fabrics
        if (findLotToDeliver.availableFabrics < 0) {
            return res.status(400).json({ message: "Not enough fabrics available for delivery" });
        }

        // Update lot status
        if (findLotToDeliver.availableFabrics === 0) {
            findLotToDeliver.lotStatus = "Lot Close";
        } else {
            findLotToDeliver.lotStatus = "Delivery Running";
        }

        await findLotToDeliver.save();
        res.status(201).json(findLotToDeliver);

    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Error" });
    }
};

module.exports = { getAllLot, createLot, addFabricToLot, deliveryFabric }
