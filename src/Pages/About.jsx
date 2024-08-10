import React from "react";
import { globalKonnect } from "../Utility/data";
import { allAssets } from "../Utility/baseAssets";
function About() {
  const intro = globalKonnect.aboutUs.intro;
  const tagLine = globalKonnect.aboutUs.tagline;
  const description = globalKonnect.aboutUs.description;
  const img = allAssets.aboutImg;
  return (
    <div className="w-full bg-black font-Alata text-white text-lg flex items-center justify-evenly py-10">
        {/* textarea */}
        <div className="flex-col py-5 flex items-start justify-evenly max-lg:text-base max-lg:items-center max-lg:text-center max-lg:w-[80vw] lg:w-[35vw] px-5 leading-relaxed">
          {/* title */}
          <p
            className="font-Rammetto text-3xl text-yellow-500 py-5 max-lg:text-center max-lg:w-full"
            style={{ textShadow: "white 2px 2px" }}
          >
            <span className="lg:hidden">-</span>About Us-
          </p>
          {/* intro */}
          <p className="">{intro}</p>
          {/* tagLine */}
          <p className="text-Yellow py-5 text-xl max-lg:text-lg max-lg:w-[90vw]">
            {tagLine}
          </p>
          {/* description */}
          <p>{description}</p>
        </div>
        {/* image    */}
        <img src={img} className="max-lg:hidden" />
      </div>
  
  );
}

export default About;
