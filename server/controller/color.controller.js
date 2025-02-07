const Color = require("../model/color.model");

const getAllColor = async (req, res) => {
  try {
    const getAllColor = await Color.find();
    res.status(201).json(getAllColor);
  } catch (error) {
    res.status(404).json({ massage: "Not Found" });
  }
};

const createNewColor = async (req, res) => {
  try {
    const { colorName, colorQty, colorCode} = req.body;
    const newColor = new Color({
      colorName,
      colorQty,
      colorCode,
      date: new Date(),
    });
    const createColor = await newColor.save();
    res.statue(201).json(createColor);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllColor, createNewColor };
