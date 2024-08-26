import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Tools = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
    onClick();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { item: "HOME", path: "#home" },
    { item: "ABOUT US", path: "#aboutus" },
    { item: "TOURS", path: "#tours" },
    { item: "CLIENTS", path: "#clients" },
    { item: "VISA", path: "#visa" },
  ];
  const navigate = useNavigate();
  const pathLink = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div
      className="text-sm h-[3rem] rounded-xl hover:text-black flex items-center justify-center "
      ref={dropdownRef}
    >
      <div className="relative inline-block text-center  ">
        <div>
          <button
            type="button"
            className="inline-flex justify-center max-sm:hover:text-black items-center w-full py-2 font-semibold focus:outline-none text-sm h-[3rem] px-6 max-sm:w-full hover:bg-Layoutneon rounded-xl text-white hover:text-black"
            onClick={toggleDropdown}
          >
            <span className="max-sm:ml-4 sm:ml-[3vw] md:ml-0 text-Yellow">
              <RiMenu3Line size={30} />
            </span>
          </button>
          {isOpen && (
            <div className="absolute w-40 mt-1 flex items-center justify-center origin-top-left bg-offBlack opacity-80 divide-y divide-gray-100 rounded-l-3xl rounded-b-3xl shadow-lg transition duration-600 right-7">
              <div className="py-1 ">
                {/* Uncomment and add more links as needed */}
                {navItems.map((value, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        pathLink(value.path);
                      }}
                      className="block  py-2 text-Yellow text-sm hover:bg-Yellow hover:text-black cursor-pointer border-b-2 border-gray-700"
                    >
                      {value.item}
                    </div>
                  );
                })}
                <button
                  type="button"
                  onClick={() => {
                    navigate("/#contactus");
                  }}
                  className="px-3 py-1 my-4 bg-Yellow text-offBlack flex items-center justify-center rounded-3xl cursor-pointer"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
