import React from "react";
import { globalKonnect } from "../Utility/data";
import { IoIosArrowDropright } from "react-icons/io";
function Home() {
  const { title, description, otherLinks } = globalKonnect.home[0];
  return (
    <div className="w-full h-[100vh] bg-black font-Alata text-Yellow flex flex-col items-center justify-center">
      <p className="text-[5rem] text-white font-Rammetto">{title}</p>
      <div className="flex-col flex items-center justify-center w-[50vw]">
        <p className="text-xl w-[25rem] text-start">{description}</p>

        <p className="my-5 flex items-center justify-evenly">{otherLinks}
          <span className="mx-5">
          <button
            type="button"
            className="px-6 py-2 bg-Yellow text-black rounded-3xl flex items-center justify-center"
          >
            Book Now{" "}
            <span className="mx-2 bg-white rounded-full">
              <IoIosArrowDropright size={20} />
            </span>{" "}
          </button>
        </span></p>
        
      </div>
    </div>
  );
}

export default Home;
