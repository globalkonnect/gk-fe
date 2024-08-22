import React, { useState } from "react";
import RecognitionCard from "../Components/RecognitionCard";
import { allAssets } from "../Utility/baseAssets";

function Recognitions() {
  // State to handle the vertical line visibility (if needed for future use)
  const [verticalline, setVerticalline] = useState(false);

  // Destructuring assets from allAssets
  const { verticalLine, dubai, ministryOfTourism, awesomeAssam } = allAssets;
  const cards = [dubai, ministryOfTourism, awesomeAssam];

  return (
    <div id="recognitions" className="bg-Yellow font-Rammetto flex-col flex items-center justify-center py-[2rem]  text-3xl">
      {/* Title */}
      <p className=" max-sm:py-5 mx-20 backdrop-blur-sm" 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <span className="max-md:hidden">-</span>Recognitions
        <span className="max-md:hidden">-</span>
      </p>

      {/* Recognition cards with optional vertical line for small screens */}
      <div className="flex w-[80vw] items-center justify-evenly py-10  max-lg:shadow-2xl max-lg:bg-white max-lg:p-2 max-lg:rounded-2xl">
        {cards.map((value, index) => (
          <span key={index} className="flex items-center justify-center">
            {/* Recognition Card */}
            <RecognitionCard bgImg={value} />
            {/* Vertical line between cards on small screens */}
            {index < cards.length - 1 && (
              <img
                src={verticalLine}
                className="w-[10px] lg:hidden"
                alt="Vertical line"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Recognitions;
