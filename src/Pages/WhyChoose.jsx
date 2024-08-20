import React from "react";
import WhyUsDesktop from "../Components/WhyUsDesktop";
import WhyUsMobile from "../Components/WhyUsMobile";
function WhyChoose() {
  return (
    <div id="whyus" className="bg-Yellow font-Alata w-full pt-10 flex-col">
      {/* title */}
      <p className="font-Rammetto text-3xl text-center mt-[10rem] flex items-center justify-center"
       data-aos="fade-up"
       data-aos-offset="200"
       data-aos-easing="ease"
       data-aos-duration="1000"
      >
        <span className="max-md:hidden">-</span>Why Choose Global Konnect{" "}
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
