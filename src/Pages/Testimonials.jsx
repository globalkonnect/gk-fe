import React from "react";
import TestimonialCard from "../Components/TestimonialCard";
import { allAssets } from "../Utility/baseAssets";

function Testimonials() {
  // Destructuring the background image for the Testimonials section from allAssets
  const { bgTestimonial, Line } = allAssets;

  return (
    <div id="testimonials"
      className="pb-10 pt-[10rem] flex flex-col max-md:items-center  max-md:justify-center  bg-Offwhite font-Rammetto text-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTestimonial})` }}
    >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" /> */}
      
      {/* Title */}
      <p className="py-5 mx-20 text-white backdrop-blur-sm">
        <span className="max-md:hidden">-</span>Testimonials
        <span className="max-md:hidden">-</span>
      </p>

      {/* Testimonial card section */}
      <div className="flex items-center ">

        <img src={Line} className="bg-white lg:w-[35vw] max-md:hidden" />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonials;
