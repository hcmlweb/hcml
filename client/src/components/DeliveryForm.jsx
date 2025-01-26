import React, { useState } from "react";

function DeliveryForm({ id, setDeliveryModal }) {
  const [fabricAmount, setFabricAmount] = useState('');
  const [thanQty, setThanQty] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDelivery = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!fabricAmount || fabricAmount <= 0 || !thanQty || thanQty <= 0) {
      alert("Please enter valid values.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://hcml-d4nk.vercel.app/api/lot/deliver/${id}`, {
        method: "POST",
        body: JSON.stringify({ fabricAmount, thanQty }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Delivery successful!");
        setFabricAmount('');
        setThanQty('');
        setDeliveryModal(false);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert("Failed to deliver. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            value={fabricAmount}
            onChange={(e) => setFabricAmount(e.target.value)}
            className="focus:outline-none border-[1px] border-gray-400 col-span-1 focus:ring-2 focus:ring-orange-500"
            type="number"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="col-span-1">Than Quantity</label>
          <input
            value={thanQty}
            onChange={(e) => setThanQty(e.target.value)}
            className="focus:outline-none border-[1px] border-gray-400 col-span-1 focus:ring-2 focus:ring-orange-500"
            type="number"
          />
        </div>
        <button
          onClick={handleDelivery}
          className="bg-orange-500 text-white shadow-sm rounded-md py-2 px-4 hover:bg-orange-600"
          disabled={isLoading}
        >
          {isLoading ? "Delivering..." : "Deliver"}
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
