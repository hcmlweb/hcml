import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaMixer } from "react-icons/fa";

const SideBar = ({ setToggle, toggle }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2 p-1 shadow-md">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="w-[10px]"></div>
          <img className="w-[40px] md:w-[60px]" src={Logo} alt="HCML" />
          <div className="hidden sm:flex"></div>
          <FaMixer
            onClick={() => {
              setToggle(!toggle);
            }}
            className={`text-xl text-blue-600 opacity-70 sm:hidden`}
          />
        </div>
        <h2 className="text-xs font-semibold font-serif">
          Harun Composite Mills Limited
        </h2>
      </div>
      <div className="w-full flex flex-col items-center justify-start">
        <ul className="w-full p-2 text-xs md:text-lg font-mono flex flex-col">
          <NavLink
            to="/"
            className="transitio-all duration-500 active:border-b-[1px] border-blue-500 py-1 px-2 hover:shadow-blue-500 shadow-sm"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/lot"
            className="transitio-all duration-500 active:border-b-[1px] border-blue-500 py-1 px-2 hover:shadow-blue-500 shadow-sm"
          >
            Griege
          </NavLink>
          <NavLink
            to="/color"
            className="transitio-all duration-500 active:border-b-[1px] border-blue-500 py-1 px-2 hover:shadow-blue-500 shadow-sm"
          >
            Daying
          </NavLink>
          <NavLink
            to="/expense"
            className="transitio-all duration-500 active:border-b-[1px] border-blue-500 py-1 px-2 hover:shadow-blue-500 shadow-sm"
          >
            Expense
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
