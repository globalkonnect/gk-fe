import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { allAssets } from "../Utility/baseAssets";

function Service() {
  // Destructuring the background image from allAssets
  const { bg } = allAssets;

  return (
    <div
      id="services"
      className="font-Rammetto flex-col flex items-center justify-center text-center text-Yellow py-[10rem] text-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Title */}
      <p className="py-5"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease"
      data-aos-duration="1000"
      >
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
