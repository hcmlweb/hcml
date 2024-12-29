const Expanse = require('../model/expanseModel')


const getAllecpanse = async (req,res)=>{
   try {
    const getExpanse= await Expanse.find()
    res.status(200).json(getExpanse)
   } catch (error) {
    res.status(402).send(error)
   }
}
const createExpanse = async (req,res)=>{
   const {expanseName, expanseAmount, date} =req.body;
   try {
    const newExpanse= new Expanse({
      expanseName,
      expanseAmount,
      date:new Date(date)
    })
    const expanseCreated= await newExpanse.save()
    res.status(200).json(expanseCreated)
   } catch (error) {
    res.status(402).send(error)
   }
}

module.exports={getAllecpanse , createExpanse};