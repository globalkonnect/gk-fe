import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Tools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
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

  return (
    <div
      className="text-sm h-[3rem] rounded-xl hover:text-black flex items-center justify-center"
      ref={dropdownRef}
    >
      <div className="relative inline-block text-center ">
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
            <div className="box absolute w-40  flex items-center justify-center origin-top-left bg-offBlack opacity-85 divide-y divide-gray-100 rounded-l-3xl rounded-b-3xl shadow-lg transition duration-600 right-7 appear-from-right-top">
              <div className="py-1">
                {navItems.map((value, index) => (
                  <div
                    key={index}
                    onClick={() => handleNavigate(value.path)}
                    className="block py-2 text-Yellow text-sm hover:bg-Yellow hover:text-black cursor-pointer border-b-2 border-gray-700"
                  >
                    {value.item}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleNavigate("/#contactus")}
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
