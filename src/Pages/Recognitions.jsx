import React, { useState } from "react";
import RecognitionCard from "../Components/RecognitionCard";
import { allAssets } from "../Utility/baseAssets";
function Recognitions() {
  const [verticalline, setVerticalline] = useState(false);
  const line = allAssets.verticalLine;
  const cardOne = allAssets.dubai;
  const cardTwo = allAssets.ministryOfTourism;
  const cardThree = allAssets.awesomeAssam;
  const cards = [cardOne, cardTwo, cardThree];

  return (
    <div className="bg-Yellow font-Rammetto flex-col flex items-center justify-center py-5">
      <p className="text-3xl max-md:text-2xl py-2 max-lg:py-5">
        -Recognitions-
      </p>
      <div className=" flex w-[80vw] items-center justify-evenly py-10 max-lg:bg-white max-lg:p-2 max-lg:rounded-2xl">
        {cards.map((value, index) => {
          return (
            <span key={index} className="flex items-center justify-center">
              <RecognitionCard bgImg={value} />
              {/* line for small scree */}
              {index < 2 && <img src={line} className="w-[10px] lg:hidden" />}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Recognitions;
