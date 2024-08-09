import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import Line from "../assets/Others/Line.png";
function Footer() {
  const footerIcons = [<BiLogoFacebook />, <GrInstagram />, <BsWhatsapp />];
  return (
    <div className="bg-black text-white w-full flex items-center justify-center h-[15rem] overflow-x-hidden">
      <div className="bg-white w-[50vw]">
        <img src={Line} alt="" srcset="" />
      </div>

      {footerIcons.map((value, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-evenly text-3xl p-2 m-2 text-black border-black hover:border-2 hover:border-white bg-Yellow rounded-full"
          >
            {value}
          </div>
        );
      })}
      <div className="bg-white w-[50vw]">
        <img src={Line} alt="line"  />
      </div>
    </div>
  );
}

export default Footer;
