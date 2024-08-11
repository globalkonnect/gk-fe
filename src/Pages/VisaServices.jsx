import React from "react";
import { allAssets } from "../Utility/baseAssets";
import VisaServiceCard from "../Components/VisaServiceCard";
function VisaServices() {
  const line = allAssets.Line;
  return (
    <div className="flex flex-col items-center justify-center text-center font-Rammetto text-3xl max-sm:text-xl py-20">
      {/* title */}
      <p>
        <span className="max-md:hidden">-</span>Visa Services
        <span className="max-md:hidden">-</span>
      </p>
      {/* card component */}
      <div className="py-20">
        <VisaServiceCard />
      </div>
      {/* text */}
      <p className="py-10">0% Failure</p>
      {/* lines + text */}
      <div className="flex w-full items-center justify-center">
        <div className="bg-Yellow w-[50vw]">
          <img src={line} />
        </div>
        {/* end text */}
        <p className="text-Yellow text-2xl text-center w-[300px] max-sm:text-base max-md:text-xl max-lg:w-[350px] max-md:w-[300px] max-sm:w-[400px]">
          SCHENGEN VISA
        </p>
        <div className="bg-Yellow w-[50vw]">
          <img src={line} className="bg-black " />
        </div>
      </div>
    </div>
  );
}

export default VisaServices;
