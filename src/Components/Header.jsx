import React, { useState } from "react";
import { allAssets } from "../Utility/baseAssets";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
function Header() {
  const { GK } = allAssets;
  const navItems = [
    { item: "HOME",path:"#home" },
    { item: "ABOUT US",path:"#aboutus" },
    { item: "TOURS", path:"#tours" },
    { item: "CLIENTS",path:"#clients" },
    { item: "VISA",path:"#visa" },
  ];
  const navigate =useNavigate()
  const pathLink =(path)=>{
    navigate(`/${path}`)
  }

  const [open,setOpen]= useState()
  return (
    <div className="fixed top-0 md:left-[15vw] max-md:left-0 z-20 opacity-90 flex items-center justify-between md:w-[70vw] max-md:w-full bg-offBlack font-Alata py-3 rounded-b-3xl cursor-pointer">
      <div className="ml-10 flex items-center justify-center">
        <img src={GK} />
      </div>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button" className="lg:hidden  text-Yellow mr-10 z-30">
        <RiMenu3Line size={30} />
      </button>
      
      
     {/* {open && <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>} */}
      
      
      
      
      
      
      <div className="flex items-center justify-center mr-10 max-lg:hidden z-40">
        {navItems.map((value, index) => {
          return (
            <div key={index} className="text-Yellow backdrop-blur-sm mr-6" onClick={()=>{pathLink(value.path)}}>
              {value.item}
            </div>
          );
        })}
        <button
          type="button"
          onClick={()=>{navigate("/#contactus")}}
          className=" px-3 py-1  bg-Yellow flex items-center justify-center rounded-3xl cursor-pointer"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Header;
