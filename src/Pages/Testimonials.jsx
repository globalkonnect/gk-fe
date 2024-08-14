import React from "react";
import TestimonialCard from "../Components/TestimonialCard";
import { allAssets } from "../Utility/baseAssets";

function Testimonials() {
  // Destructuring the background image for the Testimonials section from allAssets
  const { bgTestimonial } = allAssets;

  return (
    <div
      className="py-10 flex flex-col items-center justify-center bg-Offwhite font-Rammetto text-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTestimonial})` }}
    >
      {/* Title */}
      <p className="py-5">
        <span className="max-md:hidden">-</span>Testimonials
        <span className="max-md:hidden">-</span>
      </p>

      {/* Testimonial card section */}
      <TestimonialCard />
    </div>
  );
}

export default Testimonials;
