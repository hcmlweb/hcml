const express=require('express');
const { createDayingMemo } = require('../controller/dyeing.controller');
const router=express.Router();


router.post('/',createDayingMemo)



module.exports=router;


