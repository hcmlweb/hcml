import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function LotManage() {
    const [fabricAmount,setFabricAmount]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [msg,setMsg]=useState("")
    const handelClick=async(e)=>{
        setIsLoading(true)
       await fetch(`http://localhost:4000/api/lot/${id}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id, fabricAmount})
       })
      
       setFabricAmount('')
       setMsg("Than Added Successfully")
       setTimeout(()=>{
       setMsg('')
       },3000)
       setIsLoading(false)
    }

  const {id}= useParams()
  return (
    <>
    {isLoading ? <h2>Loading</h2> :
    <div className="w-full flex flex-col item-center justify-center p-8 text-xs font-semibold">
            <h2>Lot ID:{id} </h2>
            <h2 className="w-full text-center uppercase text-xs font-semibold bg-blue-500 text-white py-2">ADD A NEW THAN</h2>
            <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                <label>Enter Goj Amount</label>
                <input type="number" className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none" onChange={(e) => { setFabricAmount(e.target.value) }} />
             <h2 className={`${msg ? "flex text-lg text-green-600 font-semibold" : "hidden"}`}>{msg}</h2>
            </div>
            <button className="bg-green-600 text-white py-2 text-xs font-semibold mb-4" onClick={handelClick}>Save Than</button>
            <Link to='/lot' className="border-[2px] border-green-600 text-green-600 font-semibold text-xs py-2 px-4 text-center transition-all duration-500 hover:bg-green-600 hover:text-white" >Back to Lot page</Link>
        </div>}
    </>
        
  )
}

export default LotManage