const express=require('express')

const router=express.Router()

const { createDayingMemo } = require('../controller/dyeing.controller');

router.post('/', createDayingMemo)



module.exports=router;


