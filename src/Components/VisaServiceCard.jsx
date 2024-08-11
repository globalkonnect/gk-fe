import React from "react";
import { allAssets } from "../Utility/baseAssets";
function VisaServiceCard() {
  const image1 = allAssets.visaImg1;
  const image2 = allAssets.visaImg2;
  const image3 = allAssets.visaImg3;
  const visaImages = [image1, image2, image3];
  return (
    <div className=" flex items-center justify-evenly">
      {visaImages.map((value, index) => {
        return <img key={index} src={value} className="mx-5" />;
      })}
    </div>
  );
}

export default VisaServiceCard;
