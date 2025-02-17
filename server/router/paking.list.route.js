const express = require("express");
const {
  getAllPakingList,
  createPakingList,
} = require("../controller/paking.list.controller");
const router = express.Router();

router.get("/", getAllPakingList);
router.post("/", createPakingList);

module.exports = router;
