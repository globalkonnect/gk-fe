import React, { useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";

function Drawer({ children, isOpen, setIsOpen }) {
  const drawerRef = useRef();

  const closeDrawer = (e) => {
    if (drawerRef.current === e.target) {
      setIsOpen(false);
    }
  };

  return (
    <main
      ref={drawerRef}
      onClick={closeDrawer}
      className={
        " fixed overflow-hidden z-10 bg-black bg-opacity-50 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-80 left-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  bg-Layoutblue" +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-80 pb-10 flex flex-col space-y-6 overflow-y-scroll h-full ">
          <div className="flex justify-end p-4">
            <RiMenu3Line size={30} 
              onClick={() => {
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] text-white cursor-pointer"
            />
          </div>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

export default Drawer;
