const express = require('express');
const { getAllParty, createParty } = require('../controller/party.controller');
const router = express.Router()

router.get('/', getAllParty)
router.post('/', createParty)

module.exports = router;