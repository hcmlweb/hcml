const Paking = require("../model/paking.list.model");

const getAllPakingList = async (req, res) => {
  try {
    const getPaking = await Paking.find();
    if (!getPaking) {
      res.status(404).json({ massage: "Not Found" });
    }
    res.status(200).json(getPaking);
  } catch (error) {
    res.status(500).json({ massage: "Internal server error", error });
  }
};

const createPakingList = async (req, res) => {
  try {
    const paking = new Paking(req.body);
    if (!paking) {
      res.status(400).json({ massage: "please Provide valide Data" });
    }
    const newPak = await paking.save();
    res.status(201).json(newPak);
  } catch (error) {
    res.status(500).json({ massage: "Internal server error", error });
  }
};

module.exports = { getAllPakingList, createPakingList };
