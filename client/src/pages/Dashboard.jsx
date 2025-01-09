import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Dashboard() {
  return (
    <>
        <div className='w-full h-screen flex flex-col items-center justify-center space-y-4 '>
            <img src={Logo} alt="HCML" className='w-[150px]' />
            <div>Dashboard</div>
            <Link to="/lot" className='py-2 px-8 bg-green-700 text-white'>Enter</Link>
        </div>
    </>
    
  )
}

export default Dashboard