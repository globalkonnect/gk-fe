import React from "react";
import ClientCard from "../Components/ClientCard";
import { allAssets } from "../Utility/baseAssets";
function Clients() {
  const tata = allAssets.tata;
  const pandg = allAssets.pandg;
  const topcem = allAssets.topcem;
  const bajaj = allAssets.bajaj;
  const clientsImg = [tata, pandg, topcem, bajaj];
  return (
    <div className="w-full flex flex-col items-center justify-center font-Rammetto text-3xl bg-Offwhite py-5">
        <p>-Clients-</p>
      <div className="py-10 grid max-md:grid-cols-2 md:grid-cols-4 items-center justify-center w-[90vw]">
        {clientsImg.map((value,index)=>{return <span className="flex items-center justify-center" key={index}><ClientCard bgImg={value}/></span>}) }
      </div>
    </div>
  );
}

export default Clients;
