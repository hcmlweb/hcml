import React from 'react'

function Store() {
  return (
    <>
    <div className='text-3xl text-center uppercase underline'>Store Management</div>
    <div className='w-full grid grid-cols-2 gap-4 text-center p-4'>
        <div className='col-span-1 border-[2px] border-gray-300 hover:bg-gray-200 transition-all duration-500 hover:py-4'>
            <label htmlFor="">ডাইং</label>
        </div>
        <div className='col-span-1 border-[2px] border-gray-300 hover:bg-gray-200 transition-all duration-500 hover:py-4'>
            <label htmlFor="">মেকানিক্যাল</label>
        </div>
    </div>
    </>
    
  )
}

export default Store