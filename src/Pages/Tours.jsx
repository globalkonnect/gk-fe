import React from "react";
import TourCard from "../Components/TourCard";

function Tours() {
  return (
    <div id="tours" className="bg-Offwhite py-[10rem] flex-col flex items-center justify-center font-Rammetto text-3xl">
      {/* Title */}
      <p  data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000">
        <span className="max-md:hidden">-</span>Tours
        <span className="max-md:hidden">-</span>
      </p>

      {/* Tour card section */}
      <div className="mt-12">
        <TourCard />
      </div>
    </div>
  );
}

export default Tours;
