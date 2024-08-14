import React from "react";
import WhyUsDesktop from "../Components/WhyUsDesktop";
import WhyUsMobile from "../Components/WhyUsMobile";

function WhyChoose() {
  return (
    <div className="bg-Yellow font-Alata w-full pt-10 flex-col">
      {/* Section Title */}
      <p className="font-Rammetto text-3xl text-center p-5 flex items-center justify-center">
        <span className="max-md:hidden">-</span>
        Why Choose Global Konnect
        <span className="max-md:hidden">-</span>
      </p>

      {/* Component for Desktop View */}
      <WhyUsDesktop />

      {/* Component for Mobile View */}
      <WhyUsMobile />
    </div>
  );
}

export default WhyChoose;
