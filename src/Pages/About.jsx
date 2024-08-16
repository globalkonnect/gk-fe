import React from "react";
import { globalKonnect } from "../Utility/data";
import { allAssets } from "../Utility/baseAssets";

function About() {
  // Destructuring the necessary data from globalKonnect and allAssets
  const { intro, tagline, description } = globalKonnect.aboutUs;
  const img = allAssets.aboutImg;

  return (
    <div className="w-full bg-black font-Alata text-white text-lg flex items-center justify-evenly pt-[10rem] pb-12">
      {/* Text section */}
      <div className="flex-col py-5 flex items-start justify-evenly max-lg:text-base max-lg:items-center max-lg:text-center max-lg:w-[80vw] lg:w-[35vw] px-5 leading-relaxed">
        {/* Title */}
        <p
          className="font-Rammetto text-3xl text-yellow-500 py-5 max-lg:text-center max-lg:w-full"
          style={{ textShadow: "white 2px 2px" }}
        >
          <span className="lg:hidden">-</span>About Us-
        </p>
        {/* Introduction text */}
        <p>{intro}</p>
        {/* Tagline */}
        <p className="text-yellow-500 py-5 text-xl max-lg:text-lg max-lg:w-[90vw]">
          {tagline}
        </p>
        {/* Description */}
        <p>{description}</p>
      </div>
      {/* Image section */}
      <img src={img} alt="About Us" className="max-lg:hidden" />
    </div>
  );
}

export default About;
