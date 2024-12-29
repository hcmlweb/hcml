import React from 'react'

function Lot() {
  return (
    <>
    <div className='text-3xl text-center uppercase underline'>Lot Status</div>
    <div className='w-full p-2'>
        <div className='uppercase w-full p-4'>
            <form>
                <h2 className='text-center font-bold underline py-4'>create new lot</h2>
                <div className='flex flex-col item-center justify-between w-1/2 m-auto'>
                    <div className='grid grid-cols-2 items-center gap-4'>
                        <label className='col-span-1' htmlFor="">Name of Party</label>
                        <input className='col-span-1 border-[1px] border-gray-400  focus:none'  type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Grige Amount(YDS)</label>
                        <input type="Number" />
                    </div>
                    <div>
                        <label htmlFor="">Lot Number</label>
                        <input type="Number" />
                    </div>
                    <button>Add Lot</button>
                </div>

            </form>
        </div>
        <div className='w-full grid grid-cols-5 border-0 border-b-[1px] border-sky-700 uppercase'> 
            <div className='flex flex-row item-center justify-center space-x-4  text-center col-span-1 p-4'>
                <label htmlFor="">Lot Number</label>
                <span>1018024</span>
            </div>
            <div className='flex flex-row item-center justify-center space-x-4  text-center col-span-1 p-4'>
                <label htmlFor="">Total Griegi</label>
                <span>15000 YDS</span>
            </div>
            <div className='flex flex-row item-center justify-center space-x-4  text-center col-span-1 p-4'>
                <label htmlFor="">Available Griegi</label>
                <span>7000 YDS</span>
            </div>
            <div className='flex flex-row item-center justify-center space-x-4  text-center col-span-1 p-4'>
                <label htmlFor="">Total Daying</label>
                <span>9000 YDS</span>
            </div>
            <div className='flex flex-row item-center justify-center space-x-4  text-center col-span-1 p-4'>
                <label htmlFor="">Total Delivery</label>
                <span>8000</span>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Lot