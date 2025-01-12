const Color=require('../model/color.model')


const getAllColor = async (req,res)=>{
    try {
        const getColor = await Color.find()
        res.status(200).json(getColor)
    } catch (error) {
        res.status(500).json(error)
    }
}



const createNewColor=async(req,res)=>{
    try {
        const { colorName,
                colorQty,
               } =req.body;

            const newColor= new Color({
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