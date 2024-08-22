import React from "react";
import { globalKonnect } from "../Utility/data";
import { allAssets } from "../Utility/baseAssets";

function About() {
  // Destructuring the necessary data from globalKonnect and allAssets
  const { intro, tagline, description } = globalKonnect.aboutUs;
  const img = allAssets.aboutImg;
  const aesimg = allAssets.img1;
  const { img2, img1, img6, img7 } = allAssets;
  return (
    <div
      id="aboutus"
      className="w-full bg-black font-Alata text-white text-lg flex items-center justify-evenly py-[10rem]"
    >
      <img
        src={img1}
        className="stroke-white absolute right-0 top-[105vh] max-lg:hidden"
      />
      <img
        src={img6}
        className="stroke-white absolute right-0 top-[105vh] size-40 lg:hidden"
      />
      <img
        src={img2}
        className="stroke-white absolute left-0 lg:top-[109rem] xl:top-[105rem] max-lg:hidden"
      />
      <img
        src={img7}
        className="stroke-black absolute left-0 size-40 top-[175vh] lg:hidden"
      />
      {/* Text section */}
      <div
        className="flex-col py-5 flex items-start justify-evenly max-lg:text-base max-lg:items-center max-lg:text-center max-lg:w-[80vw] lg:w-[35vw] px-5 leading-relaxed"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
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
      <div className="flex">
        <img
          src={img}
          alt="About Us"
          className="max-lg:hidden h-[470px]"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
}

export default About;
