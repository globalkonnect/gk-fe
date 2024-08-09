import React from "react";

function ClientCard({ bgImg }) {
  return (
    <div className="bg-white h-[8rem] w-[10rem] lg:h-[10rem] lg:w-[12rem] m-5 rounded-3xl flex items-center justify-center shadow-2xl">
      <img src={bgImg} className="size-[5rem] max-sm:size-[4rem] lg:size-[6.5rem]"/>
    </div>
  );
}

export default ClientCard;
