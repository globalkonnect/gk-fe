import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { allAssets } from "../Utility/baseAssets";

function Service() {
  // Destructuring the background image from allAssets
  const { bg } = allAssets;

  return (
    <div id="services"
      className="font-Rammetto flex-col flex items-center justify-center text-center text-Yellow py-20 text-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Title */}
      <p className="py-5">
        <span className="max-md:hidden">-</span>Service We Offer
        <span className="max-md:hidden">-</span>
      </p>

      {/* Service card section */}
      <div className="mt-20">
        <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
