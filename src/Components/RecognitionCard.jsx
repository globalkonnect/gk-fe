import React from "react";
function RecognitionCard({ bgImg }) {
  return (
    <>
      {/* Recognition card for large screen */}
      <div className="bg-white h-[12rem] w-[15rem] rounded-3xl flex items-center justify-center  max-lg:hidden ">
        <img src={bgImg} className="w-[10rem] h-[6.5 rem]" />
      </div>
      {/* Recognition card for small screen */}
      <div className="rounded-3xl flex items-center justify-center mx-5 lg:hidden ">
        <img src={bgImg} />
      </div>
    </>
  );
}

export default RecognitionCard;
