import React from "react";
import { allAssets } from "../Utility/baseAssets";
function ServiceCard() {
  const airplane = allAssets.airplane;
  const change = allAssets.change;
  const honeymoon = allAssets.honeymoon;
  const visa = allAssets.visa;
  const tools = [
    { icon: airplane, title: "Exclusive flight deals" },
    { icon: honeymoon, title: "Specially curated travel packages" },
    { icon: visa, title: "Hassle-free visa assistance" },
    { icon: change, title: "Forex services" },
  ];
  return (
    <div className="flex">
      {tools.map((value, index) => {
        return (
          <div key={index} className="flex-col items-center justify-center text-center text-white text-xl">
            <div className="text-xl m-10 rounded-full  bg-Yellow flex items-center justify-center size-[10rem] shadow-2xl">
              {" "}
              <img src={value.icon} className="p-2 size-28" />
            </div>
            <p className="w-[15rem] ">
                {value.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceCard;
