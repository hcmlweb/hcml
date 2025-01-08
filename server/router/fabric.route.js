const express = require('express')
const { getAllfabric, findByDateFabric } = require('../controller/fabric.controller')
const router = express()


router.get('/', findByDateFabric)

module.exports = router