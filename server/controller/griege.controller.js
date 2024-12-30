
const Griege=require('../model/griege.model')

const getAllGriege=async (req, res)=>{
    try {
        const getGriege= await Griege.find()
        if(!getGriege){
            res.status(404).json({massege: "No griege Found"})
        }
        else{
            res.status(201).json(getGriege)
        }
       
    } catch (error) {
        res.status(500).json({massage: "interal server error" + error})
    }
}
const createGriege= async(req,res)=>{
    const {lotNumber, date} =req.body;
    try {
        const newGriege= new Griege({
            lotNumber, 
            date
        })
        const saveGriege = await newGriege.save()
        res.status(201).json(saveGriege)
        
    } catch (error) {
        res.status(500).json({massage:"Internal Server Error"})
    }
}


module.exports={getAllGriege, createGriege}