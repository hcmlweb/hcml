import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
      <div className="text-sm grid grid-cols-6 px-4 py-2 bg-orange-500 rounded-t-lg text-white">
        <h3 className="col-span-1">Date</h3>
        <h3 className="col-span-1">Lot Number</h3>
        <h3 className="col-span-1">Party Name</h3>
        <h3 className="col-span-1">Total Griege</h3>
        <h3 className="col-span-1">Total Than</h3>
        <h3 className="col-span-1">Lot Status</h3>
      </div>
      {lot.map((item) => {
        let lotDate = new Date(item.date).toLocaleDateString("en-GB");
        return (
          <Link
            to={`${item._id}`}
            key={item._id}
            className="text-sm grid grid-cols-6 p-4  border-[1px] border-gray-300 rounded-lg hover:shadow-md capitalize"
          >
            <h3 className="col-span-1">{lotDate}</h3>
            <h3 className="col-span-1">{item.lotNumber}</h3>
            <h3 className="col-span-1">{item.partyName}</h3>
            <h3 className="col-span-1">{item.totalFabrics}</h3>
            <h3 className="col-span-1">{item.totalThan}</h3>
            <h3 className="col-span-1">{item.lotStatus}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default AllLots;
