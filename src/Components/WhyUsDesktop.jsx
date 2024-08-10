import React from "react";
import { allAssets } from "../Utility/baseAssets";
import { globalKonnect } from "../Utility/data";
function WhyUsDesktop() {
  const bentLine = allAssets.bentLine;
  const data = globalKonnect.whyChooseGK.bullets
  return (
    <div className="flex max-xl:hidden">
      {/* line */}
      <img src={bentLine} className="h-[825px] -mt-[116px] pb-0 ml-[8rem]" />
      {/* points */}
      <div className="flex-col flex  justify-evenly leading-loose ">
        {data.map((value, index) => {
          return (
            // parent element
            <p
              key={index}
              className={` flex ${
                (index + 1) % 2 ? "-ml-[33rem]" : "-ml-[2rem]"
              }        
            `}
            >
              <p className={`bg-white size-[3rem] ${index + 1 == 2 ? "mt-[22px]" : "-mt-[0px]"} flex items-center justify-center rounded-full font-Rammetto text-2xl mr-5 text-Yellow`}>
                {/* bullet index number */}
                {index + 1}
              </p>
              {/* text value */}
              <p className="text-justify w-[35rem] ml-10 ">
               <span className="text-2xl">{value.title}</span> <br />
                {value.point}</p>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default WhyUsDesktop;
