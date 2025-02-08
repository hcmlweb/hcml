const Demand = require("../model/color.demand.model");
const Color = require("../model/color.model");
const Lot = require("../model/lot.model");

const getAllDemand = async (req, res) => {
  try {
    const getDemand = await Demand.find();
    res.status(200).json(getDemand);
  } catch (error) {
    res.status(404).json({ massage: "Not Available" });
  }
};

const createDemand = async (req, res) => {
  try {
    const {
      demands,
      memoNumber,
      lotNumber,
      partyName,
      dayingAmout,
      disignName,
      disignColor,
      masterName,
    } = req.body;

    await Promise.all(
      demands.map(async (item) => {
        const color = await Color.findOne({ colorCode: item.colorCode });
        if (color) {
          if (color.colorQty >= item.colorQty) {
            color.colorQty -= item.colorQty;
            await color.save();
          } else {
            throw new Error(`Not enough stock for ${item.colorName}`);
          }
        }
      })
    );

    const colorDemand = new Demand({
      demands,
      memoNumber,
      lotNumber,
      partyName,
      dayingAmout,
      disignName,
      disignColor,
      masterName,
    });

    const updateLotStatus = await Lot.findOne({ lotNumber: lotNumber });
    if (updateLotStatus) {
      updateLotStatus.lotStatus = "Dyeing";
      await updateLotStatus.save();
    }

    const saveDemand = await colorDemand.save();
    res.status(201).json(saveDemand);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { getAllDemand, createDemand };
