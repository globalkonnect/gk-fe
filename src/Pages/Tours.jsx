import React from "react";
import TourCard from "../Components/TourCard";
import { allAssets } from "../Utility/baseAssets";
function Tours() {
  const { img3, img8 } = allAssets;
  return (
    <div
      id="tours"
      className="bg-Offwhite py-[10rem] flex-col flex items-center justify-center font-Rammetto text-3xl"
    >
      {/* Title */}
      <img
        src={img3}
        className="stroke-black absolute right-0  top-[150rem] max-lg:hidden"
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
      <img
        src={img8}
        className="stroke-white absolute right-0 top-[240vh] size-40 lg:hidden"
      />
    </div>
  );
}

export default Tours;
