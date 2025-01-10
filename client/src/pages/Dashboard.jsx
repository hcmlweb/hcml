import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Logo from '../assets/logo.png'

import SideBar from '../components/SideBar'
import { TfiMenu } from "react-icons/tfi";




function Dashboard() {

  const [toggle, setToggle] = useState(false)
  const [dpage, setDpage] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setDpage(false)
    }
    else {
      setDpage(true)
    }
  }, [location.pathname])



  return (
    <>
      <div className='w-full grid grid-cols-5 sm:grid-cols-12 bg-gray-400 h-screen'>
        <button className='col-span-5 sm:hidden bg-white flex flex-row items-center justify-between px-2 pt-2'>
          <TfiMenu className={`text-xl text-blue-600`} onClick={() => { setToggle(!toggle) }} />
          <img className='w-[40px]' src={Logo} alt="HCML" />
          <div className="w-[10px]'></div>
        </button>
        <div className={`col-span-2 transition duration-400 ${!toggle ? "hidden" : "absolute"}  sm:flex flex-col bg-white py-2 md:py-4 h-screen mr-[2px]`}>
          <SideBar toggle={toggle} setToggle={setToggle} />
        </div>
        <div className='sm:col-span-10 col-span-5 py-2 md:py-4 h-screen bg-white'>
          <main className={`${!dpage ? "flax" : "hidden "} p-4`}>
            <div className="uppercase">
              <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md text-center">Dashboard</h2>
            </div>
          </main>
          <Outlet />
        </div>

      </div>
    </>

  )
}

export default Dashboard
