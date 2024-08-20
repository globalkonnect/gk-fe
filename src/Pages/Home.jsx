import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import TextTransition, { presets } from "react-text-transition";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imag1 from "../assets/test/1.jpg";
import imag2 from "../assets/test/2.jpg";
import imag3 from "../assets/test/3.jpg";
import imag4 from "../assets/test/4.jpg";
import imag5 from "../assets/test/5.jpg";
import BackgroundSwitcher from "../Components/BackgroundSwitcher";
import { globalKonnect } from "../Utility/data";

const Home = () => {
  const swiperRef = useRef();
  const autoPlayDelayDuration = 2000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  const [direction, setDirection] = useState("up");
  const homeData = globalKonnect.home;
  const images = [imag1, imag2, imag3, imag4, imag5];

  const next = () => {
    swiperRef.current.slideNext();
  };

  const previous = () => {
    swiperRef.current.slidePrev();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, autoPlayDelayDuration);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      id="home"
      className="relative h-screen font-Alata text-Yellow flex flex-col items-center justify-center"
    >
      <BackgroundSwitcher
        images={images}
        currentIndex={currentIndex}
        direction={direction}
      />

      <div className="absolute h-screen flex flex-col items-center justify-start pt-[25vh]">
        <div className="w-[70vw] h-[150px] pb-48">
          <TextTransition
            className="text-[120px] text-white font-Rammetto text-start w-[70vw]"
            springConfig={presets.wobbly}
            direction={direction}
          >
            {homeData[currentIndex].title}
          </TextTransition>
        </div>

        <div className="flex items-start justify-start h-[50vh] w-[100vw] ">
          <div className="w-[50vw] flex items-end justify-start pl-[15vw]">
            <div className="flex-col flex items-start justify-center w-[30vw] ">
              <p className="text-xl w-[30vw] text-start">
                {homeData[currentIndex].description}
              </p>
              <p className="my-5 flex items-center justify-evenly tracking-[3px]">
                {homeData[currentIndex].tags}
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
          </div>

          {!isTablet ? (
            <Swiper
              className="w-[50vw] h-[50vh] "
              modules={[Navigation, Pagination]}
              loop={true}
              centeredSlides={false}
              pagination={{ clickable: true }}
              spaceBetween={50}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                const newDirection =
                  swiper.realIndex > currentIndex ? "up" : "down";
                setDirection(newDirection);
                setCurrentIndex(swiper.realIndex);
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                611: { slidesPerView: 1.5 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 1.5 },
              }}
            >
              {images.map((value, index) => {
                const isCurrent = swiperRef.current?.realIndex === index;
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={value}
                      className="h-[400px] w-[550px] object-cover rounded-[32px]"
                      onClick={() => {
                        if (!isCurrent) next();
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* 
  
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

*/
}
