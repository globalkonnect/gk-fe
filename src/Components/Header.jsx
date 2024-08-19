import React, { useState } from "react";
import { allAssets } from "../Utility/baseAssets";
import Sidenav from "./Sidenav"
import { useNavigate } from "react-router-dom";
function Header() {
  const { GK } = allAssets;
  const [isOpen, setIsOpen] = React.useState(false);
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
      
      {/* <Sidenav isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-Layouttrans  rounded-xl mb-10 mx-10 lg:hidden  text-Yellow z-30">
          {headerOptions.map((option, index) => (
            <div
              key={index}
              title={option.title}
              onClick={() => {
                setIsOpen(false);
                window.location.href = option.href;
              }}
              className="about text-sm font-semibold text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3rem] px-6 flex items-center justify-center"
            >
              {option.title}
            </div>
          ))}
          <div className=" hover:bg-Layoutneon rounded-2xl hover:text-black">
           <Tools onClick={()=>{setIsOpen(false)}}/>
          </div>
        </div>
        <div className="flex items-center justify-center   max-sm:ml-4 sm:ml-[5vw]">
          {PortfolioButton()}
        </div>
      </Sidenav> */}
      
      
      
      
      
     
    </div>
  );
}

export default Header;
