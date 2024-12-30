import React, { useEffect, useState } from 'react'
import Headers from '../components/Headers'
import ClipLoader from "react-spinners/ClipLoader";

function Eandp() {
const [data, setData]=useState([]);
const [outputDate, setOutputDate]=useState('');
const [date,setDate]=useState('')
const [expanseName, setExpanseName]=useState('')
const [expanseAmount,setExpanseAmount]=useState(0)
const [isLoading,setIsLoading]=useState(false)

useEffect( ()=>{
  setIsLoading(true)
  fetch('https://hcml-server.vercel.app/api/expanse')
  .then((res)=>{ return res.json()})
  .then(data=> {setData(data)})
  setIsLoading(false)
},[data,outputDate])



const handleSubmit= async (e)=>{
  e.preventDefault();
  try {
    setIsLoading(true)
    const response = await fetch('https://hcml-server.vercel.app/api/expanse', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({expanseName,expanseAmount,date}),
  });
  setIsLoading(false)
  setDate('')
  expanseName('')
  expanseAmount(0)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
      <div className='w-full'>
        <Headers />
        <div className='w-full'>
          <div className='w-full m-auto text-center p-4 pb-[2pz]'>
            <h2 className='text-2xl'>হারুন কম্পজিট মিলস লিমিটেড</h2>
            <h2 className='text-md'>গোলাকান্দাইল, ভুলতা, রুপগঞ্জ, নারায়ণগঞ্জ</h2>
          </div>
          {
            isLoading ? <ClipLoader /> : 
            <div className='w-full p-8'>
            <input type="date" onChange={(e)=>{setOutputDate}}/>
            {data.map(item=>{
                return(
                  <div key={item._id} className='w-2/3 m-auto grid grid-cols-3 items-center justify-center'>
                    <h2 className='p-1 bg-gray-200 m-1 text-center'>{item.expanseName}</h2>
                    <h2 className='p-1 bg-gray-200 m-1 text-center'>{item.expanseAmount}</h2>
                    <h2 className='p-1 bg-gray-200 m-1 text-center'>{new Date(item.date).toLocaleString()}</h2>
                  </div>)
            })}
          </div>
          }
          
          <div className='w-2/3 m-auto'>
            <form className='w-full m-auto my-4 p-8 shadow-md flex flex-col space-y-2' onSubmit={handleSubmit}>
            <div>
                  <label>Select A Date</label>
                  <input type="date" onChange={(e)=>{setDate(e.target.value)}}/>
                </div>
              <div className='w-full grid grid-cols-4'>
                <label className='col-span -1' htmlFor="">Purpose</label>
                <input className='col-span-3 focus:outline-none border-[1px] border-gray-400 px-4' type="text" onChange={(e)=>{setExpanseName(e.target.value)}} />
              </div>
              <div className='w-full grid grid-cols-4'>
                <label className='col-span-1' htmlFor="">Amount</label>
                <input className='col-span-3 focus:outline-none border-[1px] border-gray-400 px-4' type="text" onChange={(e)=>{setExpanseAmount(e.target.value)}}/>
              </div>
              <button className='uppercase border-[1px] border-blue-500 text-blue-500  px-4 py-[2px] text-xs hover:bg-blue-500 hover:text-white transition-all duration-500'>save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eandp