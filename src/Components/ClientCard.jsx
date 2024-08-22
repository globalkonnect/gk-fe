import React from "react";

function ClientCard({ bgImg, height, width }) {
  return (
    <div className="bg-white h-[10rem] w-[12rem] lg:h-[12rem] max-sm:h-[7rem] max-sm:w-[10rem] lg:w-[13rem] m-5 rounded-3xl flex items-center justify-center shadow-2xl">
      {/* Displaying the background image */}
      <img
        src={bgImg}
        alt="Client Logo" // Added alt text for accessibility
        style={{ height: height, width: width }}
        className="max-sm:h-[4rem] max-sm:w-[4rem] lg:h-[6.5rem] lg:w-[6.5rem]"
      />
    </div>
  );
}

export default ClientCard;
