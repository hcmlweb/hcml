import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LotManage() {
  const { id } = useParams();
  const [lots, setLots] = useState([]);

  useEffect(() => {
    fetch("https://hcml-d4nk.vercel.app/api/lot")
      .then((res) => res.json())
      .then((data) => setLots(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-4">
      {lots.map((lot) => {
        if (lot._id == id) {
          return (
            <div>
              <div className="p-4 rounded-lg border-[2px] border-gray-300 uppercase">
                <h2>Lot Number: {lot.lotNumber}</h2>
                <h3>Party Name: {lot.partyName}</h3>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default LotManage;
