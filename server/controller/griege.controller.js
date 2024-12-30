
const Griege=require('../model/griege.model')

const getAllGriege=async (req, res, next)=>{
    try {
        const getGriege= await Griege.find()
        if(!getGriege){
            res.status(404).json({massege: "No griege Found"})
        }
        else{
            res.status(201).json(getGriege)
        }
        next()
    } catch (error) {
        res.status(500).json({massage: "interal server error" + error})
    }
}
const createGriege= async(req,res,next)=>{
    const {} =req.body;
    try {
        const newGriege= new Griege({
        
        })
        const saveGriege = await newGriege.save()
        res.status(201).json(saveGriege)
        next()
    } catch (error) {
        res.status(500).json({massage:"Internal Server Error"})
    }
}


module.exports={getAllGriege, createGriege}