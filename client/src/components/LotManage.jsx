import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function LotManage() {
    const [fabricAmount,setFabricAmount]=useState('')
    const [thanQty,setThanQty]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [msg,setMsg]=useState("")
    const [lot,setLot]=useState([])

  useEffect(()=>{
    fetch(`https://hcml-d4nk.vercel.app/api/lot`)
    .then(res=>res.json())
    .then(data=> setLot(data))
  },[fabricAmount])

    const handelClick=async(e)=>{
        setIsLoading(true)
       await fetch(`https://hcml-d4nk.vercel.app/api/lot/${id}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id, fabricAmount,thanQty})
       })
      
       setFabricAmount('')
       setThanQty('')
       setMsg("Added Successfully")
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
            <div className='w-full flex flex-col item-center justify-center p-8 text-xs font-semibold'>
              <div className='w-full'> {lot.map(item=> {if(item._id==id){
                return (
                 <div className='w-full' key={item._id}>
                   <div className='uppercase border-0 border-b-[2px] border-gray-700'>
                      <h2 className='text-4xl p-2 mr-2'>Lot Number:<span className='pl-2'>{item.lotNumber}</span></h2>
                      <h2 className='text-3xl p-2 mr-2'>Party Name:<span className='pl-2'>{item.partyName}</span></h2>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-4 p-2'>
                      <div className='col-span-1 w-full flex flex-col items-center justify-center'>
                        <h2 className='text-xs font-serif font-semibold underline'>Total Griege Receive For This Than</h2>
                        <div className='w-full flex flex-col items-center justify-evenly'>
                          <ul className='w-full grid grid-cols-2 text-center'>
                            <li className='col-span-1 border-[1px] border-gray-800 px-2 py-1'>Than No</li>
                            <li className='col-span-1 border-[1px] border-gray-800 px-2 py-1'>Than Amount</li>
                          </ul>
                          {item.fabrics.map((fabric, i)=>{
                          return(
                              <ul key={fabric._id} className='w-full grid grid-cols-2 text-center'>
                                <li className='col-span-1 border-[1px] border-gray-800 px-2 py-1'>{i+1}</li>
                                <li className='col-span-1 border-[1px] border-gray-800 px-2 py-1'>{ fabric.fabricAmount}</li>
                              </ul>
                        )})}
                        <ul className='w-full grid grid-cols-2 text-center'>
                            <li className='col-span-1 border-[1px] border-gray-800 px-2 py-1'>Total Griege</li>
                            <li className='col-span-1 border-[1px] border-gray-800 px-2 py-1'>{item.fabrics.reduce((total,fabric)=>total+fabric.fabricAmount,0)}</li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-span-1'></div>

                    </div>
                 </div>
              )
              }})} </div>
            </div>
            <div className='w-full flex flex-col item-center justify-center p-8 text-xs font-semibold'>
              <h2 className="w-full text-center uppercase text-xs font-semibold bg-blue-500 text-white py-2">ADD A NEW THAN</h2>
              <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                  <label>Enter Goj Amount</label>
                  <input type="number" className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none" onChange={(e) => { setFabricAmount(e.target.value) }} />
              <h2 className={`${msg ? "flex text-lg text-green-600 font-semibold" : "hidden"}`}>{msg}</h2>
              </div>
              <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                  <label>Enter Than Quantity</label>
                  <input type="number" className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none" onChange={(e) => { setThanQty(e.target.value) }} />
              <h2 className={`${msg ? "flex text-lg text-green-600 font-semibold" : "hidden"}`}>{msg}</h2>
              </div>
              <button className="bg-green-600 text-white py-2 text-xs font-semibold mb-4" onClick={handelClick}>Save Than</button>
              <Link to='/lot' className="border-[2px] border-green-600 text-green-600 font-semibold text-xs py-2 px-4 text-center transition-all duration-500 hover:bg-green-600 hover:text-white" >Back to Lot page</Link>
            </div>
        </div>}
    </>
        
  )
}

export default LotManage