const express=require('express');
const { getAllColor, createNewColor } = require('../controller/color.controller');
const router = express.Router()

router.get('/',getAllColor)
router.post('/',createNewColor)


module.exports=router;