import React from "react";
import TourCard from "../Components/TourCard";
import { allAssets } from "../Utility/baseAssets";
function Tours() {
  const { img3,img7, img8 } = allAssets;
  return (
    <div
      id="tours"
      className="bg-Offwhite py-[10rem] md:h-[900px] max-md:py-[2rem] flex-col flex items-center justify-center font-Rammetto text-3xl overflow-x-hidden"
    >
      {/* Title */}
      <div className="w-full ">
      <img
        src={img7}
        className="stroke-black  size-40 sm:top-[185vh] max-sm:top-[200vh] lg:hidden flex"
      />
      </div>
      <img
        src={img3}
        className="stroke-black absolute right-0 xl:top-[143rem] lg:top-[145rem]  max-lg:hidden"
      />
      <p
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <span className="max-md:hidden">-</span>Tours
        <span className="max-md:hidden">-</span>
      </p>

      {/* Tour card section */}
      <div className="mt-12">
        <TourCard />
      </div>
     <div className="w-full flex justify-end" >
     <img
        src={img8}
        className="stroke-white  size-40 lg:hidden"
      />
      </div> 
    </div>
  );
}

export default Tours;
