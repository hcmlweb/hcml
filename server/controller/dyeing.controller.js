const Dyeing=require('../model/dyeing.model')



const createDayingMemo=async(req,res)=>{
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
        const createDyingDemand= new Dyeing({
            memoNumber,
            partyName,
            lotNumber,
            dyeingCatagory,
            dyeingColor,
            dyeingQty,
            colorName,
            colorQty,
            date:new Date()
        })
        const saveDyeingDemand=await createDyingDemand.save()
        res.status(201).json(saveDyeingDemand)
        
    } catch (error) {
        res.status(404).json({massage: "not working"})
    }
}


module.exports={createDayingMemo}