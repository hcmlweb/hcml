import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import DeliveryForm from "./DeliveryForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function LotManage() {
  const { id } = useParams();
  const [lots, setLots] = useState([]);
  const [dying, setDying] = useState([]);
  const [deliveryModal, setDeliveryModal] = useState(false);

  useEffect(() => {
    fetch("https://hcml-d4nk.vercel.app/api/lot")
      .then((res) => res.json())
      .then((data) => setLots(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("https://hcml-d4nk.vercel.app/api/demand")
      .then((res) => res.json())
      .then((data) => setDying(data))
      .catch((err) => console.log(err));
  }, []);

  const handelDeliveryModal = () => {
    setDeliveryModal(true);
  };
  // const handelDeliver = (e) => {
  //   e.preventDefault();
  //   fetch(`https://hcml-d4nk.vercel.app/api/lot/deliver/${id}`, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   });
  // };
  return (
    <div className="p-4">
      {lots.map((lot) => {
        if (lot._id == id) {
          return (
            <div className="w-full flex flex-col item-center justify-center space-y-2">
              <div className="p-4 rounded-lg border-[2px] border-gray-300 uppercase">
                <h2>Lot Number: {lot.lotNumber}</h2>
                <h3>Party Name: {lot.partyName}</h3>
              </div>
              <div className="w-full flex flex-col space-y-1 item-center justify-center p-4 rounded-lg border-[2px] border-gray-300 uppercase">
                <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md text-center">
                  Dyeing Status
                </h2>

                <ul className="grid grid-cols-7 item-centr justify-between text-sm bg-sky-500 text-white mt-2 px-4 py-2 text-center">
                  <li className="col-span-1">Memo Number</li>
                  <li className="col-span-1">Dying Amount</li>
                  <li className="col-span-2">Used Dyes</li>
                  <li className="col-span-1">Design Name</li>
                  <li className="col-span-1">Color</li>
                  <li className="col-span-1">Master Name</li>
                </ul>
                {dying.map((dye) => {
                  if (lot.lotNumber == dye.lotNumber) {
                    return (
                      <ul className="grid grid-cols-7 gap-1 item-center justify-between border-[1px] border-gray-300 py-1 px-4 text-sm text-center">
                        <li className="col-span-1">{dye.memoNumber}</li>
                        <li className="col-span-1">{dye.dayingAmout}</li>
                        <li className="col-span-2">
                          {dye.demands.map((color) => {
                            return (
                              <ul className="grid grid-cols-2 text-left border-[1px] border-gray-400 px-4 py-1">
                                <li className="col-span-1">
                                  {color.colorName}
                                </li>
                                <li className="col-span-1">{color.colorQty}</li>
                              </ul>
                            );
                          })}
                        </li>
                        <li className="col-span-1">{dye.disignName}</li>
                        <li className="col-span-1">{dye.disignColor}</li>
                        <li className="col-span-1">{dye.masterName}</li>
                      </ul>
                    );
                  }
                })}
              </div>
              <div>
                <h2 className="border-[1px] border-orange-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md text-center">
                  Delivery Status
                </h2>
                <ul className="grid grid-cols-3 item-centr justify-between text-sm bg-sky-500 text-white mt-2 px-4 py-2 text-center rounded-t-md">
                  <li className="col-span-1">Demo Pass</li>
                  <li className="col-span-1">Fabric Amount</li>
                  <li className="col-span-1">Than Quantity</li>
                </ul>
                {lot.deliveryFabrics.map((delivery) => {
                  return (
                    <ul className="grid grid-cols-3 text-center border-[1px] border-gray-400 px-4 py-1">
                      <li className="col-span-1">112233</li>
                      <li className="col-span-1">{delivery.fabricAmount}</li>
                      <li className="col-span-1">{delivery.thanQty}</li>
                    </ul>
                  );
                })}
                <div className="w-full flex flex-row item-center justify-between bg-orange-500 text-white uppercase px-4 py-2 rounded-b-md">
                  <h3 className="text-sm font-semibold px-4 py-1">
                    Total Delivery:{" "}
                    {lot.deliveryFabrics.reduce(
                      (total, amount) => total + amount.fabricAmount,
                      0
                    )}
                  </h3>
                  <button
                    onClick={handelDeliveryModal}
                    className="hover:bg-orange-600 px-4 text-sm font-semibold py-1 border-[1px] border-white rounded-full"
                  >
                    Deliver Griege
                  </button>
                  <Modal isOpen={deliveryModal} style={customStyles}>
                    <DeliveryForm id={id} setDeliveryModal={setDeliveryModal} />
                  </Modal>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default LotManage;
