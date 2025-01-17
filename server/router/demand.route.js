const express = require('express');
const { getAllDemand, createDemand } = require('../controller/demand.controller');
const router = express.Router()

router.get('/', getAllDemand)
router.post('/', createDemand)
module.exports = router;