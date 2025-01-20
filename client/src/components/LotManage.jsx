import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function LotManage() {
  const [fabricAmount, setFabricAmount] = useState('');
  const [thanQty, setThanQty] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [lot, setLot] = useState([]);
  const [check, setCheck] = useState(false);
  const [dying, setDying] = useState([]);

  useEffect(() => {
    fetch(`https://hcml-d4nk.vercel.app/api/lot`)
      .then(res => res.json())
      .then(data => setLot(data));
  }, [fabricAmount]);

  useEffect(() => {
    fetch(`https://hcml-d4nk.vercel.app/api/demand`)
      .then(res => res.json())
      .then(data => setDying(data));
  }, []);

  const handelClick = async () => {
    setIsLoading(true);
    await fetch(
      `${check ? `https://hcml-d4nk.vercel.app/api/lot/deliver/${id}` : `https://hcml-d4nk.vercel.app/api/lot/${id}`}`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, fabricAmount, thanQty }),
      }
    );

    setFabricAmount('');
    setThanQty('');
    setMsg('Added Successfully');
    setTimeout(() => {
      setMsg('');
    }, 3000);
    setIsLoading(false);
  };

  const { id } = useParams();

  const totalDyingAmounts = (data) => {
    return data.reduce((acc, item) => {
      if (!acc[item.lotNumber]) {
        acc[item.lotNumber] = { lotNumber: item.lotNumber, totalAmount: 0 };
      }
      acc[item.lotNumber].totalAmount += item.dayingAmout;
      return acc;
    }, {});
  };

  const dyeingAmountFind = totalDyingAmounts(dying);

  return (
    <>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div className="w-full flex flex-col item-center justify-center p-1 md:p-8 text-xs font-semibold">
          <div className="w-full flex flex-col item-center justify-center p-1 md:p-8 text-xs font-semibold">
            <div className="w-full">
              {lot.map((item) => {
                if (item._id === id) {
                  return (
                    <div className="w-full" key={item._id}>
                      <div className="uppercase border-0 border-b-[2px] border-gray-700">
                        <h2 className="text-sm md:text-4xl py-1 px-2 mr-2">
                          Lot Number:
                          <span className="pl-2">{item.lotNumber}</span>
                        </h2>
                        <h2 className="text-sm md:text-3xl py-1 px-2 mr-2">
                          Party Name:
                          <span className="pl-2">{item.partyName}</span>
                        </h2>
                      </div>
                      <div className="w-full grid grid-cols-2 gap-4 p-2">
                        <div className="col-span-1">
                          <ul>
                            <li>Total Griege</li>
                            <li>Total Daying</li>
                            <li>Total Delivery</li>
                            <li>Shortage of this Lot</li>
                          </ul>
                        </div>
                        <div className="col-span-1">
                          <ul>
                            <li>{item.totalFabrics}</li>
                            <li>
                              {
                                dyeingAmountFind[item.lotNumber]
                                  ? dyeingAmountFind[item.lotNumber].totalAmount
                                  : 0
                              }
                            </li>
                            <li>{item.deliverFabrics}</li>
                            <li>
                              {Math.ceil(
                                ((item.totalFabrics - item.deliverFabrics) *
                                  100) /
                                  item.totalFabrics
                              )}{' '}
                              %
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="w-full flex flex-col item-center justify-center p-1 md:p-8 text-xs font-semibold">
            {check ? (
              <h2 className="w-full text-center uppercase text-xs font-semibold bg-blue-500 text-white py-2">
                Deliver giege of this THAN
              </h2>
            ) : (
              <h2 className="w-full text-center uppercase text-xs font-semibold bg-blue-500 text-white py-2">
                ADD A NEW THAN
              </h2>
            )}
            <div className="w-full border-[1px] border-gray-400 p-1 md:p-4 flex flex-row items-center justify-start space-x-4">
              <span>if want to deliver a lot! please checked</span>
              <input
                type="checkbox"
                className="w-16"
                onChange={() => {
                  setCheck(!check);
                }}
              />
            </div>
            <div className="w-full border-[1px] border-gray-400 p-1 md:p-4 grid grid-cols-2">
              <label>Enter Goj Amount</label>
              <input
                type="number"
                className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none"
                onChange={(e) => {
                  setFabricAmount(e.target.value);
                }}
              />
              <h2
                className={`${
                  msg ? 'flex text-lg text-green-600 font-semibold' : 'hidden'
                }`}
              >
                {msg}
              </h2>
            </div>
            <div className="w-full border-[1px] border-gray-400 p-1 md:p-4 grid grid-cols-2">
              <label>Enter Than Quantity</label>
              <input
                type="number"
                className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none"
                onChange={(e) => {
                  setThanQty(e.target.value);
                }}
              />
              <h2
                className={`${
                  msg ? 'flex text-lg text-green-600 font-semibold' : 'hidden'
                }`}
              >
                {msg}
              </h2>
            </div>
            <button
              className="bg-green-600 text-white py-2 text-xs font-semibold mb-4"
              onClick={handelClick}
            >
              {check ? 'Deliver Than' : 'Save Than'}
            </button>
            <Link
              to="/lot"
              className="border-[2px] border-green-600 text-green-600 font-semibold text-xs py-2 px-4 text-center transition-all duration-500 hover:bg-green-600 hover:text-white"
            >
              Back to Lot page
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default LotManage;
