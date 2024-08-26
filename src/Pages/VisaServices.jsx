import React from "react";
import { allAssets } from "../Utility/baseAssets";
import VisaServiceCard from "../Components/VisaServiceCard";

function VisaServices() {
  // Destructuring the line asset from allAssets
  const { Line } = allAssets;
  const { img4, img11 } = allAssets;
  return (
    <div className="flex flex-col">
      {" "}
      <img
        src={img11}
        className="stroke-white absolute left-0  size-32 lg:hidden"
      />
      <div
        id="visa"
        className="flex flex-col items-center justify-center text-center font-Rammetto text-3xl max-sm:text-xl py-[10rem]"
      >
        {/* Title */}

        <p
          className="py-10 text-3xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <span className="max-md:hidden ">-</span>Visa Services
          <span className="max-md:hidden">-</span>
        </p>
        <img
          src={img4}
          className="stroke-black absolute left-2 xl:top-[340rem]  top-[320vh]   max-lg:hidden"
        />

        {/* VisaServiceCard component */}
        <div className="py-20">
          <VisaServiceCard />
        </div>

        <p className="py-10 text-4xl font-bold text-stroke text-shadow">
          0% Failure
        </p>

        {/* Line and text section */}
        <div className="flex w-full items-center justify-center">
          {/* Left line */}
          <div className="bg-Yellow w-[50vw]">
            <img src={Line} alt="decorative line" />
          </div>

          {/* Central text */}
          <p className="text-Yellow text-2xl text-center w-[300px] max-sm:text-base max-md:text-xl max-lg:w-[350px] max-md:w-[300px] max-sm:w-[400px]">
            SCHENGEN VISA
          </p>

          {/* Right line */}
          <div className="bg-Yellow w-[50vw]">
            <img src={Line} alt="decorative line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaServices;
