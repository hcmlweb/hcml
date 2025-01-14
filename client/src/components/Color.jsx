import React from 'react'
import { useEffect,useState} from 'react'

function Color() {

const [colors,setColors]=useState([])
  useEffect(()=>{
    fetch('https://hcml-d4nk.vercel.app/api/color')
.then(then=>res.json())
   . then(color=>setColors(data))
  },[])
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">Color Management</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4'>
            <div className='col-span-1 border flex flex-col item-center justify-center border-orange-500 p-2'>
               <h2>Color </h2>
               <div className='grid grid-cols-2'>
                <span className="col-span-1">Available Stock</span>
                <span className="col-span-1">50 Kg</span>
                </div>
            </div>
            <div className='col-span-1 border border-orange-500 p-2'>
                <div className='grid grid-cols-2'>
                   <h2>Color </h2>
                   <span>Available Stock</span>
                   <span>Used This Month</span>
                </div>
            </div>
            <div className='col-span-1 border border-orange-500 p-2'>
                <div className='grid grid-cols-2'>
                   <h2>Color </h2>
                   <span>Available Stock</span>
                   <span>Used This Month</span>
                </div>
            </div>
            <div className='col-span-1 border border-orange-500 p-2'>
                <div className='grid grid-cols-2'>
                   <h2>Color </h2>
                   <span>Available Stock</span>
                   <span>Used This Month</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Color
