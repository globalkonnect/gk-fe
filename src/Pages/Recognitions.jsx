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
    <div className="bg-Yellow font-Rammetto flex-col flex items-center justify-center py-5">
      {/* Title */}
      <p className="text-3xl max-md:text-2xl py-2 max-lg:py-5">
        -Recognitions-
      </p>

      {/* Recognition cards with optional vertical line for small screens */}
      <div className="flex w-[80vw] items-center justify-evenly py-10 max-lg:shadow-2xl max-lg:bg-white max-lg:p-2 max-lg:rounded-2xl">
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
