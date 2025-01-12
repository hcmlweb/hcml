const Dyeing=require('../model/dyeing.model')



const createDayingMemo=(req,res)=>{
    try {
        const {
            memoNumber,
            partyName,
            lotNumber,
            dyeingCatagory,
            dyeingColor,
            dyeingQty,
            colorName,
            colorQty,
            date,
        }=req.body
    
        res.status(201).json({massage: "work running"})
        
    } catch (error) {
        res.status(404).json({massage: "work running"})
    }
}


module.exports={createDayingMemo}