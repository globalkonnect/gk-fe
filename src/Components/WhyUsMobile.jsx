import React from "react";
import { allAssets } from "../Utility/baseAssets";
import { globalKonnect } from "../Utility/data";
function WhyUsMobile() {
  const rectangle = allAssets.rectangle;
  const data = globalKonnect.whyChooseGK.bullets;
  return (
    <div className="flex xl:hidden overflow-x-hidden py-10">
      <img src={rectangle} className="py-10" />

      {/* wrapper */}
      <div>
        {/* // parent element */}
        {data.map((value, index) => {
          return (
            <p
              key={index}
              className={`flex -ml-[28px] ${
                index == 0 ? "mt-[80px]" : "mt-[60px]"
              } `}
            
           
            >
              <p className="bg-white size-[3rem] flex items-center justify-center rounded-full font-Rammetto text-2xl  text-Yellow">
                {/* bullet index number */}
                {index + 1}
              </p>
              {/* text value */}
              <p className="text-start sm:w-[80vw] max-md:w-[60vw] max-sm:w-[60vw] ml-[20px] ">
                <span className="text-2xl ">{value.title}</span> <br />
                <span className="leading-relaxed">{value.point}</span>
              </p>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default WhyUsMobile;
