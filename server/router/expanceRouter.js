const express=require('express');
const {getAllecpanse, createExpanse} = require('../controller/expanseController');
const router = express.Router();

router.get('/', getAllecpanse)
router.post('/', createExpanse)
module.exports=router;