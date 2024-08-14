import React from "react";
import { globalKonnect } from "../Utility/data";
function TestimonialCard() {
  const { testimonials } = globalKonnect;
  return (
    <div className="py-5">
      {testimonials.map((value, index) => {
        return (
          <div key={index}>
            <div className="h-[10rem] w-[35rem] my-10 p-5 bg-white rounded-3xl flex items-center justify-center font-Alata text-lg max-md:hidden">
              {value}
            </div>
            <div className="h-[25rem] w-[25rem] max-sm:h-[20rem] max-sm:w-[20rem] my-10 p-5 bg-white rounded-3xl flex items-center justify-center font-Alata text-lg md:hidden">
              {value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TestimonialCard;
