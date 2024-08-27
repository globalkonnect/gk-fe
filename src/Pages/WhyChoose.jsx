import React from "react";
import WhyUsDesktop from "../Components/WhyUsDesktop";
import WhyUsMobile from "../Components/WhyUsMobile";
import { allAssets } from "../Utility/baseAssets";
function WhyChoose() {
  const {img9} = allAssets
  return (
    <div id="whyus" className="bg-Yellow font-Alata w-full  flex-col overflow-x-hidden">
      {/* title */}
      <div className="w-full flex justify-end">
      <img
          src={img9}
          className="stroke-white size-36 lg:hidden"
        />
      </div>
      
      <p className="font-Rammetto text-3xl max-sm:text-[25px] text-center flex items-center justify-center md:py-[6rem]"
       data-aos="fade-up"
       data-aos-offset="200"
       data-aos-easing="ease"
       data-aos-duration="1000"
      >
        <span className="max-md:hidden">-</span> <span className="max-md:w-[80vw]">Why Choose Global Konnect</span>
        <span className="max-md:hidden">-</span>
      </p>
      {/* for xl screen */}
      <WhyUsDesktop />
      {/* for screen < xl */}
      <WhyUsMobile />
      
    </div>
  );
}

export default WhyChoose;
