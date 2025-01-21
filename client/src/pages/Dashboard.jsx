import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Logo from '../assets/logo.png'

import SideBar from '../components/SideBar'
import { TfiMenu } from "react-icons/tfi";




function Dashboard() {

  const [toggle, setToggle] = useState(true)
  const [dpage, setDpage] = useState(true)
  const location = useLocation()
  const [lot, setLot] = useState([])
  const [collectDemand, setCollectDemand] = useState([])


  const date = new Date()
  const newDate = date.toLocaleDateString()




  useEffect(() => {
    fetch("https://hcml-d4nk.vercel.app/api/lot")
      .then(res => res.json())
      .then(data => setLot(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    fetch('https://hcml-d4nk.vercel.app/api/demand')
      .then(res => res.json())
      .then(data => setCollectDemand(data))
  }, [])
  useEffect(() => {
    if (location.pathname === '/') {
      setDpage(false)
    }
    else {
      setDpage(true)
    }
  }, [location.pathname])


  return (<div className='w-full grid grid-cols-5 sm:grid-cols-12 bg-gray-400 h-screen'>
    <button className='col-span-5 sm:hidden bg-white flex flex-row items-center justify-between px-2 pt-2'>
      <TfiMenu className={`text-xl text-blue-600`} onClick={() => { setToggle(!toggle) }} />
      <img className='w-[40px]' src={Logo} alt="HCML" />
      <div className="w-[10px]"></div>
    </button>
    <div className={`col-span-2 transition-all duration-1000 ${!toggle ? "ml-0" : "-ml-[2000px] sm:ml-0"} absolute sm:static  sm:flex flex-col bg-white py-2 md:py-4 h-screen mr-[2px]`}>
      <SideBar toggle={toggle} setToggle={setToggle} />
    </div>
    <div className='sm:col-span-10 col-span-5 py-2 md:py-4 h-screen bg-white'>
      <main className={`${!dpage ? "flax" : "hidden "} p-1 md:p-4`}>
        <div className="uppercase">
          <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md text-center">Dashboard</h2>
        </div>
        <div className='grid grid-cols-1 item-cemter justify-between mt-2 md:gap-4 py-4'>
          <div className='col-span-1 flex flex-col items-center justify-center'>
            <h2 className='w-full px-2 py-1 font-medium text-sm shadow-md  text-center uppercase border-[1px] border-blue-500'>Todays Griege In</h2>
            <ul className='w-full grid grid-cols-12 items-center justify-center border-x-[1px] border-y-0 border-gray-800 bg-blue-600 text-white text-center text-xs sm:text-sm'>
              <li className='col-span-1'>Date</li>
              <li className='col-span-1'>Lot Number</li>
              <li className='col-span-1'>Party Name</li>
              <li className='col-span-1'>Griege Length</li>
              <li className='col-span-1'>Finishing Length</li>
              <li className='col-span-1'>Griege Amount</li>
              <li className='col-span-1'>Than Qty</li>
              <li className='col-span-1'>Total Delivery</li>
              <li className='col-span-1'>Remainig For Delivery</li>
              <li className='col-span-1'>Lot Status</li>
            </ul>
            {lot.map(party => {
              const collectDate = new Date(party.date).toLocaleDateString()
              if (collectDate === newDate) {
                return (
                  <ul className='w-full grid grid-cols-12 items-center justify-center border-x-[1px] border-y-0 border-blue-600 border-t-0 border-b-[1px]  text-center text-xs sm:text-sm'>
                    <li className=' pl-[1px] col-span-1'>{new Date(party.date).toLocaleDateString()}</li>
                    <li className=' pl-[1px] col-span-1'>{party.lotNumber}</li>
                    <li className=' pl-[1px] col-span-1'>{party.partyName}</li>
                    <li className=' pl-[1px] col-span-1'>{party.griegeLength}</li>
                    <li className=' pl-[1px] col-span-1'>{party.finishingLength}</li>
                    <li className=' pl-[1px] col-span-1'>{party.totalFabrics}</li>
                    <li className=' pl-[1px] col-span-1'>{party.totalReceivedThan}</li>
                    <li className=' pl-[1px] col-span-1'>{party.deliverFabrics}</li>
                    <li className=' pl-[1px] col-span-1'>{party.totalFabrics-party.deliverFabrics}</li>
                    <li className=' pl-[1px] col-span-1'>{party.lotStatus}</li>
                  </ul>
                )
              }
            })}
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-4'>
          <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md text-center">Dyeing Today</h2>
          <div className='py-2 w-full'>
            <ul className='w-full px-4 py-1 bg-green-500 text-white grid grid-cols-8 item-center justify-between capitalized text-xs md:text-sm font-semibold'>
              <li className='col-span-1'>lot number</li>
              <li className='col-span-2'>party name</li>
              <li className='col-span-1'>memo</li>
              <li className='col-span-1'>griege</li>
              <li className='col-span-1'>color</li>
              <li className='col-span-1'>design</li>
              <li className='col-span-1'>raised by</li>
            </ul>
            {collectDemand.map((item, i) => {
              return (
                <ul className={`w-full px-4 py-1 ${i % 2 ? "bg-white" : "bg-gray-300"}  grid grid-cols-8 item-center justify-between capitalized text-xs md:text-sm`}>
                  <li className='col-span-1'>{item.lotNumber}</li>
                  <li className='col-span-2'>{item.partyName}</li>
                  <li className='col-span-1'>{item.memoNumber}</li>
                  <li className='col-span-1'>{item.dayingAmout}</li>
                  <li className='col-span-1'>{item.disignColor}</li>
                  <li className='col-span-1'>{item.disignName}</li>
                  <li className='col-span-1'>{item.masterName}</li>
                </ul>
              )
            })}

          </div>
        </div>
      </main>
      <Outlet />
    </div>
  </div>)



}

export default Dashboard
