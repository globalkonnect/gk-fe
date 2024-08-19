import React from "react";
import ClientCard from "../Components/ClientCard";
import { allAssets } from "../Utility/baseAssets";

function Clients() {
  // Destructuring the client images from allAssets
  const { tata, pandg, topcem, bajaj } = allAssets;
  const clientsImg = [tata, pandg, topcem, bajaj];

  return (
    <div id="clients" className="w-full flex flex-col items-center justify-center font-Rammetto text-3xl bg-Offwhite py-[9rem]">
      {/* Clients title */}
      <p className="py-5 mx-20  backdrop-blur-sm">
        <span className="max-md:hidden">-</span>Clients
        <span className="max-md:hidden">-</span>
      </p>

      {/* Client cards grid */}
      <div className="py-20 grid max-md:grid-cols-2 md:grid-cols-4 items-center justify-center w-[90vw]">
        {/* Rendering client cards */}
        {clientsImg.map((value, index) => (
          <span className="flex items-center justify-center" key={index}>
            <ClientCard
              bgImg={value}
              height={index === 1 ? "4rem" : "5rem"}
              width={index === 1 ? "5rem" : "6rem"}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Clients;
