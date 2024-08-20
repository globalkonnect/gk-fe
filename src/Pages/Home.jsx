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
  const autoPlayDelayDuration = 1000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  const [direction, setDirection] = useState("up");
  const homeData = globalKonnect.home;
  const images = [imag1, imag2, imag3, imag4, imag5];

  const next = () => {
    if (isTablet) {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(nextIndex);
      }
    } else {
      swiperRef.current.slideNext();
    }
  };

  const previous = () => {
    swiperRef.current.slidePrev();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, autoPlayDelayDuration);

    return () => clearInterval(interval);
  });

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

      <div className="absolute h-screen flex flex-col items-center justify-start max-md:justify-center max-md:items-center pt-[25vh]">
        <div className="w-[70vw] max-md:w-[90vw] h-[150px] pb-48 max-md:pb-0">
          <TextTransition
            className="text-[10vh] max-md:text-[80px] max-sm:text-[55px] text-white font-Rammetto text-start max-md:text-center w-[70vw]"
            springConfig={presets.wobbly}
            direction={direction}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: isTablet ? "center" : "flex-start",
              justifyContent: isTablet ? "center" : "flex-start",
              textAlign: isTablet ? "center" : "left",
            }}
          >
            {homeData[currentIndex].title}
          </TextTransition>
        </div>

        <div className="flex items-start justify-start max-md:justify-center h-[50vh] w-[100vw] ">
          <div className="w-[50vw] max-md:w-[80vw] flex items-end justify-start max-md:justify-center pl-[15vw] max-md:pl-0">
            <div className="flex-col flex items-start justify-center max-md:items-center  w-[30vw] max-md:w-[80vw]">
              <p className="h-[90px] max-md:h-[150px] text-xl max-md:text-[30px] max-sm:text-[25px] max-md:leading-9 w-[30vw] max-md:w-[60vw] max-sm:w-[80vw] text-start max-md:text-center max-md:pb-5 max-sm:pb-2 overflow-hidden">
                {homeData[currentIndex].description}
              </p>
              <p className="my-5 flex items-start justify-start max-md:justify-center max-md:items-center flex-col tracking-[3px] max-md:text-[25px] max-sm:text-[18px] max-md:pl-10 max-sm:pl-0">
                {homeData[currentIndex].tags}
                <span className="pt-5">
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
                611: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1.2 },
                1280: { slidesPerView: 1.5 },
                1536: { slidesPerView: 1.8 },
              }}
            >
              {images.map((value, index) => {
                const isCurrent = swiperRef.current?.realIndex === index;
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={value}
                      className="h-[400px] lg:w-[550px] w-[450px] max-lg:w-[400px] object-cover rounded-[32px]"
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
