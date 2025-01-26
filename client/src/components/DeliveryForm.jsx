import React, { useState } from "react";

function DeliveryForm({ id, setDeliveryModal }) {
  const [fabricAmount, setFabricAmount] = useState();
  const [thanQty, setThanQty] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handelDelivery = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await fetch(`https://hcml-d4nk.vercel.app/api/deliver/${id}`, {
      method: "post",
      body: JSON.stringify({ fabricAmount, thanQty }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setDeliveryModal(false);
  };

  return (
    <div className="w-full flex flex-col space-y-2 items-center justify-center">
      <h2 className="px-4 py-2 rounded-md border-[1px] border-orange-600 text-center">
        Deliver Griege
      </h2>
      <form className="flex flex-col space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <label className="col-span-1">Griege Amount</label>
          <input
            onChange={(e) => {
              setFabricAmount(e.target.value);
            }}
            className="focus:outline-none border-[1px] border-gray-400 col-span-1"
            type="number"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="col-span-1">Than Quantity</label>
          <input
            onChange={(e) => {
              setThanQty(e.target.value);
            }}
            className="focus:outline-none border-[1px] border-gray-400 col-span-1"
            type="number"
          />
        </div>
        <button
          onClick={handelDelivery}
          className="bg-orange-500 text-white shadow-sm rounded-md py-2 px-4"
        >
          Deliver
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
