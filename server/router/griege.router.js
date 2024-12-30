const express=require('express');
const { getAllGriege, createGriege } = require('../controller/griege.controller');
const router=express.Router()

router.get('/',getAllGriege)
router.post('/',createGriege)

module.exports=router;   