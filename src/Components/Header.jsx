import React from "react";
import { useNavigate } from "react-router-dom";
import { allAssets } from "../Utility/baseAssets";
import Tools from "./Sidenav";

function Header() {
  const { GK } = allAssets;
  const navItems = [
    { item: "HOME", path: "#home" },
    { item: "ABOUT US", path: "#aboutus" },
    { item: "TOURS", path: "#tours" },
    { item: "CLIENTS", path: "#clients" },
    { item: "VISA", path: "#visa" },
  ];
  const navigate = useNavigate();
  const pathLink = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="fixed top-0 md:left-[15vw] max-md:left-0 z-20 bg-offBlack bg-opacity-80 flex items-center justify-between md:w-[70vw] max-md:w-full font-Alata py-3 rounded-b-3xl shadow-lg cursor-pointer">
      <div className="ml-10 flex items-center justify-center">
        <img
          src={GK}
          alt="Logo"
          onClick={() => {
            navigate("/#home");
          }}
          title="Global Konnect"
          className="max-md:size-12"
        />
      </div>

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className="lg:hidden text-Yellow mr-10 z-30 "
      >
        <Tools />
      </button>

      {/* Desktop nav items */}
      <div className="flex items-center justify-center mr-10 max-lg:hidden z-40">
        {navItems.map((value, index) => (
          <div
            key={index}
            className="text-Yellow backdrop-blur-sm hover:bg-gray-700 px-3 py-1 rounded-md transition-colors duration-300 cursor-pointer"
            onClick={() => {
              pathLink(value.path);
            }}
          >
            {value.item}
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            navigate("/#contactus");
          }}
          className="px-3 py-1 bg-Yellow hover:bg-white  text-offBlack flex items-center justify-center rounded-3xl cursor-pointer"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Header;
