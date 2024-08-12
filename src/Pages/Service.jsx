import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { allAssets } from "../Utility/baseAssets";
function Service() {
  const bg = allAssets.bg;
  return (
    <div
      className="font-Rammetto flex items-center justify-center text-center text-Yellow py-20 text-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`}}
    >``
      <p className="py-5">
        <span className="max-md:hidden">-</span>Service We Offer
        <span className="max-md:hidden">-</span>
        <div className="mt-20">
          <ServiceCard/>
        </div>
      </p>
    </div>
  );
}

export default Service;
