import React from "react";
import { globalKonnect } from "../Utility/data";
function TestimonialCard() {
  const testimonials = globalKonnect.testimonials;
  return (
    <div className="py-5">
      {testimonials.map((value, index) => {
        return (
          <div
            key={index}
            className="h-[10rem] w-[35rem] my-10 p-5 bg-white rounded-3xl flex items-center justify-center font-Alata text-lg "
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}

export default TestimonialCard;
