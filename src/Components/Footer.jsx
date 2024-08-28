import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { allAssets } from "../Utility/baseAssets";

function Footer() {
  const line = allAssets.Line;

  // Footer Tools
  const footerTools = [
    { toolName: "HOME", path: "#home" },
    { toolName: "ABOUT US", path: "#aboutus" },
    { toolName: "TOURS", path: "#tours" },
    { toolName: "CLIENTS", path: "#clients" },
    { toolName: "VISA", path: "#visa" },
    { toolName: "CONTACT US", path: "#contactus" },
  ];

  // Social Media Icons with Links
  const socialMediaLinks = [
    {
      Icon: <BiLogoFacebook />,
      url: "https://www.facebook.com/people/Global-Konnect/100085624747165/?mibextid=LQQJ4d",
    },
    { Icon: <GrInstagram />, url: "https://www.instagram.com/global_konnect_" },
    { Icon: <BsWhatsapp />, url: "https://wa.me/918822755694" },
  ];

  const navigate = useNavigate();

  const pathLink = (path) => {
    navigate(`/${path}`);
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="w-full flex-col py-10 flex items-center justify-center bg-black text-white overflow-x-hidden">
      {/* Footer Tools */}
      <div className="flex items-center justify-evenly w-[40rem] max-sm:hidden pb-5 mt-28 font-Alata">
        {footerTools.map((value, index) => (
          <div
            key={index}
            onClick={() => pathLink(value.path)}
            className="cursor-pointer hover:text-yellow-400"
            rel="noopener noreferrer"
          >
            {value.toolName}
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="w-full flex items-center justify-center max-sm:mt-32">
        {/* Line Image */}
        <div className="w-[50vw]">
          <img src={line} alt="line" className="w-full" />
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center">
          {socialMediaLinks.map(({ Icon, url }, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-3xl p-2 m-2 text-black border-black border-2 hover:border-white bg-yellow-400 rounded-full cursor-pointer"
              onClick={() => handleSocialClick(url)}
            >
              {Icon}
            </div>
          ))}
        </div>

        {/* Line Image */}
        <div className="w-[50vw]">
          <img src={line} alt="line" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
