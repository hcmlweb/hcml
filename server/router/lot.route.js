const express = require("express");
const {
  getAllLot,
  createLot,
  deliveryFabric,
} = require("../controller/lot.controller");

const router = express.Router();

router.get("/", getAllLot);
router.post("/", createLot);
router.post("/deliver/:id", deliveryFabric);

module.exports = router;
