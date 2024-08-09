import React from "react";
import RecognitionCard from "../Components/RecognitionCard";
import { allAssets } from "../Utility/baseAssets";
function Recognitions() {
  const cardOne = allAssets.dubai;
  const cardTwo = allAssets.ministryOfTourism;
  const cardThree = allAssets.awesomeAssam;
  const cards = [cardOne, cardTwo, cardThree];
  return (
    <div className="bg-Yellow font-Rammetto flex-col flex items-center justify-center py-5">
      <p className="text-3xl max-md:text-2xl py-2">-Recognitions-</p>
      <div className=" flex w-[80vw] items-center justify-evenly py-10">
        {cards.map((value, index) => {
          return (
            <span key={index}>
              <RecognitionCard bgImg={value} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Recognitions;
