import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const BackgroundSwitcher = ({ images, currentIndex }) => {
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const imageCount = images.length;
    let newDirection;

    if (currentIndex === prevIndex) {
      // No change in index, no transition
      newDirection = null;
    } else if (
      (prevIndex === imageCount - 1 && currentIndex === 0) ||
      (prevIndex === 0 && currentIndex === imageCount - 1)
    ) {
      // Special case for wrap-around transitions
      newDirection = prevIndex === 0 ? "down" : "up";
    } else {
      // Regular case, determine direction based on index difference
      newDirection = currentIndex > prevIndex ? "up" : "down";
    }

    setDirection(newDirection);

    const timeoutId = setTimeout(() => {
      setPrevIndex(currentIndex);
      setDirection(null); // Reset direction after transition
    }, 500); // Duration of the transition

    return () => clearTimeout(timeoutId);
  }, [currentIndex, images.length, prevIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Outgoing Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          direction === "up"
            ? "slide-out-down"
            : direction === "down"
            ? "slide-out-up"
            : ""
        }`}
        style={{ backgroundImage: `url(${images[prevIndex]})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      </div>

      {/* Incoming Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          direction === "up"
            ? "slide-in-up"
            : direction === "down"
            ? "slide-in-down"
            : ""
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      </div>
    </div>
  );
};

BackgroundSwitcher.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default BackgroundSwitcher;
