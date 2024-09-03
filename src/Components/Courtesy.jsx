import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
function Courtesy() {
  return (
    <div className="w-full items-center justify-center py-2 flex bg-black text-white ">
      Carefullly crafted by{" "}
      <a
        href="https://embraystechnologies.com/?ref=globalKonnect"
        target="_blank"
        className="flex items-center justify-center bg-Neon  px-2 ml-2 rounded-md text-black"
      >
        Embrays Technologies <RiExternalLinkLine className="ml-1" />
      </a>
    </div>
  );
}

export default Courtesy;
