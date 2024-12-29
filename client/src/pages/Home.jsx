import React from 'react'
import { Link } from 'react-router'
import Headers from '../components/Headers'







function Home() {
  return (
    <div className='w-11/12 p-4  m-auto'>
      <Headers />
        <div className='grid grid-cols-4 gap-4 text-center items-center justify-between'>
            <Link to="/expanseandpurchases" className='col-span-1 border-2 border-gray-400 px-4 py-8 text-gray-600 uppercase hover:shadow-lg'>Expanse and Purchases</Link>
            <Link to="/lot" className='col-span-1 border-2 border-gray-400 px-4 py-8 text-gray-600 uppercase hover:shadow-lg'>GRiege In/Out</Link>
            <Link to="/store" className='col-span-1 border-2 border-gray-400 px-4 py-8 text-gray-600 uppercase hover:shadow-lg'>Store</Link>
            
        </div>
    </div>
  )
}

export default Home