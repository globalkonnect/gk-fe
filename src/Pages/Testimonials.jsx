import React from "react";
import TestimonialCard from "../Components/TestimonialCard";
import { allAssets } from "../Utility/baseAssets";

function Testimonials() {
  // Destructuring the background image for the Testimonials section from allAssets
  const { bgTestimonial, Line } = allAssets;

  return (
    <div
      id="testimonials"
      className="relative pb-10 pt-[10rem] flex flex-col items-center justify-center font-Rammetto text-3xl bg-cover bg-center"
    >
      {/* Black overlay with 70% opacity */}
      <div
        className="absolute inset-0 bg-black opacity-70 z-0"
        style={{
          backgroundImage: `url(${bgTestimonial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 text-center">
        {/* Title */}
        <p className="py-5 text-white backdrop-blur-sm">
          <span className="hidden max-md:inline">-</span>Testimonials
          <span className="hidden max-md:inline">-</span>
        </p>

        {/* Testimonial card section */}
        <div className="flex items-center justify-center">
          <img
            src={Line}
            className="bg-white lg:w-[35vw] hidden max-md:inline"
          />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
