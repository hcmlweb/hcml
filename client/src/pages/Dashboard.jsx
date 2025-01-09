import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <div className='w-full h-screen flex flex-col items-center justify-center space-y-4 '>
            <div>Dashboard</div>
            <Link to="/lot" className='py-2 px-8 bg-green-700 text-white'>Enter</Link>
        </div>
    </>
    
  )
}

export default Dashboard