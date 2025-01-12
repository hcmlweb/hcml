const Dcolor=require('../model/color.model')

const getAllColor = async (req,res)=>{
    try {
        const getAllColor=await Dcolor.find()
        res.status(201).json(getAllColor)
    } catch (error) {
        res.status(404).json({massage:"Not Found"})
    }
}



const createNewColor=async(req,res)=>{
    try {
        const { colorName,
                colorQty,
               } =req.body;

            const newColor= new Consume({
                colorName,
                colorQty,
                date: new Date()
            })
        const createColor= await newColor.save()
        res.statue(201).json(createColor)


    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports={getAllColor, createNewColor}