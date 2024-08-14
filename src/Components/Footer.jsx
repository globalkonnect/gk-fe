import React from "react";
import { allAssets } from "../Utility/baseAssets";
import { BiLogoFacebook } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
function Footer() {
  const line = allAssets.Line;
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
    <div className="w-full flex-col py-10 flex items-center justify-center bg-black text-white  overflow-x-hidden">
      {/* FOOTER TOOLS */}
      <div className="flex items-center justify-evenly w-[40rem] max-sm:hidden pb-5 mt-28  font-Alata">
        {footerTools.map((value, index) => {
          return (
            <a
              key={index}
              href={value.link}
              target="_blank"
              rel="noopener noreferrer "
            >
              {value.toolName}
            </a>
          );
        })}
      </div>
      {/* SECTION2 */}
      <div className="  w-full flex items-center justify-center max-sm:mt-32">
        {/* LINE IMG */}
        <div className="bg-white w-[50vw]">
          <img src={line} />
        </div>

        {/* SOCIAL MEDIA */}
        {footerIcons.map((value, index) => {
          return (
            <div
              key={index}
              className="flex items-center  justify-evenly text-3xl p-2 m-2 text-black border-black hover:border-2 hover:border-white bg-Yellow rounded-full"
            >
              {value}
            </div>
          );
        })}
        {/* line */}
        <div className="bg-white w-[50vw]">
          <img src={line} alt="line" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
