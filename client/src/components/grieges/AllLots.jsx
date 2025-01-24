import React from 'react'
import { useState, useEffect } from 'react'


function AllLots() {
  const [lot, setLot]=useState([])

useEffect(()>={
  fetch('https://hcml-d4nk.vercel.app/api/lot')
   .then(res=>res.json())
   .then(data=>setLot(data))
},[])


  
  return (
    <div className="p-4">
     <h2>All Lot's</h2>
      {lot.map(item=>{
      return(
        <h3>{item.lotNumber}</h3>
      )
      })}
    </div>
  )
}

export default AllLots
