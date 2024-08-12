import React from "react";
import WhyUsDesktop from "../Components/WhyUsDesktop";
import WhyUsMobile from "../Components/WhyUsMobile";
function WhyChoose() {
  return (
    <div className="bg-Yellow font-Alata w-full pt-10 flex-col h-[100vh]">
      {/* title */}
      <p className="font-Rammetto text-3xl text-center p-5 flex items-center justify-center">
        <span className="max-md:hidden">-</span>Why Choose Global Konnect <span className="max-md:hidden">-</span>
      </p>
      {/* for xl screen */}
      <WhyUsDesktop />
      {/* for screen < xl */}
      <WhyUsMobile />
    </div>
  );
}

export default WhyChoose;
