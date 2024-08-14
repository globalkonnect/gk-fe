import React from "react";
import { allAssets } from "../Utility/baseAssets";
import { RiMenu3Line } from "react-icons/ri";
function Header() {
  const { GK } = allAssets;
  const navItems = [
    { item: "HOME", link: "" },
    { item: "ABOUT US", link: "" },
    { item: "TOURS", link: "" },
    { item: "CLIENTS", link: "" },
    { item: "VISA", link: "" },
  ];
  return (
    <div className="fixed top-0 md:left-[15vw] max-md:left-0 z-20 opacity-90 flex items-center justify-between md:w-[70vw] max-md:w-full bg-offBlack font-Alata py-3 rounded-b-3xl">
      <div className="ml-10 flex items-center justify-center">
        <img src={GK} />
      </div>
      <div className="lg:hidden  text-Yellow mr-10 z-30">
        <RiMenu3Line size={30} />
      </div>
      <div className="flex items-center justify-center mr-10 max-lg:hidden z-40">
        {navItems.map((value, index) => {
          return (
            <div key={index} className="text-Yellow backdrop-blur-sm mr-6">
              {value.item}
            </div>
          );
        })}
        <button
          type="button"
          className=" px-3 py-1  bg-Yellow flex items-center justify-center rounded-3xl"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Header;
