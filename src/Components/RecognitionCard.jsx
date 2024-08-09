import React from "react";
function RecognitionCard({ bgImg }) {
  return (
    <div className="bg-white h-[12rem] w-[15rem] rounded-3xl flex items-center justify-center   ">
      <img src={bgImg} className="w-[10rem] h-[6.5 rem]" />
    </div>
  );
}

export default RecognitionCard;
