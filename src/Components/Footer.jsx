import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import Line from "../assets/Others/Line.png";
function Footer() {
  //FOOTER TOOLS
  const footerTools = [
    { toolName: "HOME", link: "/" },
    { toolName: "ABOUT US", link: "/about" },
    { toolName: "TOURS", link: "/tours" },
    { toolName: "CLIENTS", link: "/clients" },
    { toolName: "VISA", link: "/visa" },
    { toolName: "CONTACT US", link: "/contact" },
  ];
  // SOCIAL MEDIA
  const footerIcons = [<BiLogoFacebook />, <GrInstagram />, <BsWhatsapp />];
  
  return (
    <div className="w-full flex-col flex items-center justify-center bg-black text-white h-[15rem] overflow-x-hidden">
      {/* FOOTER TOOLS */}
      <div className="flex items-center justify-evenly w-[40rem] max-sm:hidden py-5 font-Alata">
        {footerTools.map((value, index) => {
          return (
            <a
              key={index}
              href={value.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.toolName}
            </a>
          );
        })}
      </div>
      {/* SECTION2 */}
      <div className="  w-full flex items-center justify-center ">
        {/* LINE IMG */}
        <div className="bg-white w-[50vw]">
          <img src={Line} />
        </div>

        {/* SOCIAL MEDIA */}
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
          <img src={Line} alt="line" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
