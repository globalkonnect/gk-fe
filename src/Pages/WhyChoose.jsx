import React from "react";
import { allAssets } from "../Utility/baseAssets";
import { globalKonnect } from "../Utility/data";
function WhyChoose() {
  const bentLine = allAssets.bentLine;
  const rectangle = allAssets.rectangle;
  const points = globalKonnect.whyChooseGK.points;

  return (
    <div className="bg-Yellow font-Alata w-full pt-10 flex-col ">
      {/* title */}
      <p className="font-Rammetto text-3xl text-center py-5">
        -Why Choose Global Konnect-
      </p>
      <div className="flex">
        {/* line */}
        <img src={bentLine} className="h-[825px] -mt-[116px] pb-0 ml-[8rem]" />
        {/* points */}
        <div className="flex-col flex justify-evenly leading-loose max-xl:hidden">
          {points.map((value, index) => {
            return (
              // parent element
              <p
                key={index}
                className={` flex ${
                  (index + 1) % 2 ? "-ml-[33rem]" : "-ml-[2rem]"
                }
                ${index + 1 == 2 ? "-ml-[2rem]" : "-mt-[10px]"}
                `}
              >
                <p className="bg-white size-[3rem] flex items-center justify-center rounded-full font-Rammetto text-2xl mr-5 text-Yellow">
                  {/* bullet index nuber */}
                  {index + 1}
                </p>
                {/* text value */}
                <p className="text-justify w-[35rem] ml-10 ">{value}</p>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
