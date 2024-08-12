import React from "react";
import TourCard from "../Components/TourCard";
function Tours() {
  return (
    <div className="bg-Offwhite py-10 flex-col flex items-center justify-center font-Rammetto text-3xl">
      <p className="py-5">
        <span className="max-md:hidden">-</span>Tours
        <span className="max-md:hidden">-</span>
      </p>
      <div className="my-10">
        <TourCard />
      </div>
    </div>
  );
}

export default Tours;
