import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import TextTransition, { presets } from "react-text-transition";
import imag1 from "../assets/test/1.jpg";
import imag2 from "../assets/test/2.jpg";
import imag3 from "../assets/test/3.jpg";
import BackgroundSwitcher from "../Components/BackgroundSwitcher";
import { globalKonnect } from "../Utility/data";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, otherLinks } = globalKonnect.home[0];

  const images = [imag1, imag2, imag3];
  const texts = ["Forest", "Building", "Tree"];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen font-Alata text-Yellow flex flex-col items-center justify-center">
      <BackgroundSwitcher images={images} currentIndex={currentIndex} />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <TextTransition
          className="text-[5rem] text-white font-Rammetto"
          springConfig={presets.wobbly}
        >
          {texts[currentIndex % texts.length]}
        </TextTransition>
        <div className="flex-col flex items-center justify-center w-[50vw]">
          <p className="text-xl w-[25rem] text-start">{description}</p>

          <p className="my-5 flex items-center justify-evenly">
            {otherLinks}
            <span className="mx-5">
              <button
                type="button"
                className="px-6 py-2 bg-Yellow text-black rounded-3xl flex items-center justify-center"
              >
                Book Now
                <span className="mx-2 bg-white rounded-full">
                  <IoIosArrowDropright size={20} />
                </span>
              </button>
            </span>
          </p>
        </div>
        <button
          onClick={previous}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
