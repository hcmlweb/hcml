import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllLots() {
  const [lot, setLot] = useState([]);

  useEffect(() => {
    fetch("https://hcml-d4nk.vercel.app/api/lot")
      .then((res) => res.json())
      .then((data) => setLot(data));
  }, []);

  return (
    <div className="p-4 flex flex-col space-y-1">
      <h2>All Lot's</h2>
      <div className="text-sm grid grid-cols-5 p-4 border-[1px] border-gray-300 rounded-lg ">
        <h3 className="col-span-1">Date</h3>
        <h3 className="col-span-1">Lot Number</h3>
        <h3 className="col-span-1">Party Name</h3>
        <h3 className="col-span-1">Total Griege</h3>
        <h3 className="col-span-1">Total Than</h3>
      </div>
      {lot.map((item) => {
        let lotDate = new Date(item.date).toLocaleDateString();
        return (
          <Link
            key={item._id}
            className="text-sm grid grid-cols-5 p-4 border-[1px] border-gray-300 rounded-lg "
          >
            <h3 className="col-span-1">{lotDate}</h3>
            <h3 className="col-span-1">{item.lotNumber}</h3>
            <h3 className="col-span-1">{item.partyName}</h3>
            <h3 className="col-span-1">{item.totalFabrics}</h3>
            <h3 className="col-span-1">{item.totalReceivedThan}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default AllLots;
