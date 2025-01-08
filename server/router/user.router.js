const express = require('express');
const { getAlluser, createUser } = require('../controller/user.controller');
const router = express.Router()

router.get('/', getAlluser)
router.post('/', createUser)

module.exports = router;