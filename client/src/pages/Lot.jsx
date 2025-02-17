import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Modal from "react-modal";
import LotForm from "../components/LotForm";
import PartyForm from "../components/PartyForm";

const Lot = () => {
  const [data, setData] = useState([]);
  const [lot, setLot] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [partyFormOpen, setPartyFormOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://hcml-d4nk.vercel.app/api/lot`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLot(data);
      });
    setIsLoading(false);
  }, []);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://hcml-d4nk.vercel.app/api/fabric`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    setIsLoading(false);
  }, [isLoading]);

  const partyFormModal = () => {
    setPartyFormOpen(true);
  };
  const handelModalOpen = () => {
    setIsOpen(true);
  };
  const handelCloseModal = () => {
    setIsOpen(false);
  };
  const CloseModal = () => {
    setPartyFormOpen(false);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-between px-1 py-4 md:p-4">
        <div className="uppercase">
          <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">
            Lot Management
          </h2>
        </div>
        <div className="w-full p-4">
          <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-gray-800">
            <div className="flex flex-row items-start justify-start divide-x-[1px]">
              <NavLink
                to="alllot"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-400 px-4 py-1 rounded-t-md text-sm font-mono"
                    : "bg-gray-300 px-4 py-1 rounded-t-md text-sm font-mono"
                }
              >
                All Lots
              </NavLink>
              <NavLink
                to="deliverylots"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-400 px-4 py-1 rounded-t-md text-sm font-mono"
                    : "bg-gray-300 px-4 py-1 rounded-t-md text-sm font-mono"
                }
              >
                Delivery Lots
              </NavLink>
              <NavLink
                to="closelots"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-400 px-4 py-1 rounded-t-md text-sm font-mono"
                    : "bg-gray-300 px-4 py-1 rounded-t-md text-sm font-mono"
                }
              >
                Close Lots
              </NavLink>
              <NavLink
                to="paking-list"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-400 px-4 py-1 rounded-t-md text-sm font-mono"
                    : "bg-gray-300 px-4 py-1 rounded-t-md text-sm font-mono"
                }
              >
                Paking List
              </NavLink>
            </div>
            <div className="flex flex-row items-center justify-center space-x-1">
              <button
                onClick={handelModalOpen}
                className="rounded-t-md text-sm font-semibold font-mono  transition-all duration-500 px-4 py-1 hover:bg-green-700 bg-green-500 text-white roundedt-t-md"
              >
                Add New Lot
              </button>
              <button
                onClick={partyFormModal}
                className="rounded-t-md text-sm font-mono font-semibold transition-all duration-500 px-4 py-1 hover:bg-orange-700 bg-orange-500 text-white roundedt-t-md"
              >
                Add New Party
              </button>
              <Modal isOpen={isOpen} onRequestClose={handelCloseModal}>
                <LotForm />
              </Modal>
              <Modal isOpen={partyFormOpen} onRequestClose={CloseModal}>
                <PartyForm />
              </Modal>
            </div>
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Lot;
