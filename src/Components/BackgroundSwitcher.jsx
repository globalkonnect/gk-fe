import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const BackgroundSwitcher = ({ images, currentIndex, direction }) => {
  const [prevIndex, setPrevIndex] = useState(currentIndex);

  useEffect(() => {
    setPrevIndex(currentIndex);
  }, [currentIndex]);

  // Preload all images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
          direction === "up" ? "slide-out-down" : "slide-out-up"
        }`}
        style={{ backgroundImage: `url(${images[prevIndex]})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 max-md:opacity-35 " />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
          direction === "up" ? "slide-in-up" : "slide-in-down"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 max-md:opacity-35 " />
      </div>
    </div>
  );
};

BackgroundSwitcher.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default BackgroundSwitcher;
