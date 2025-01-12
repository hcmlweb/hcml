const Dyeing=require('../model/dyeing.model')



const createDayingMemo=async(req,res)=>{
    try {
        const {
            memoNumber,
            partyName,
            lotNumber,
           
        }=req.body
        const createDyingDemand= new Dyeing({
            memoNumber,
            partyName,
            lotNumber,
          
        })
        const saveDyeingDemand=await createDyingDemand.save()
        res.status(201).json(saveDyeingDemand)
        
    } catch (error) {
        res.status(404).json({massage: "not working"})
    }
}


module.exports={createDayingMemo}