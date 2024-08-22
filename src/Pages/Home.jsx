import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import TextTransition, { presets } from "react-text-transition";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundSwitcher from "../Components/BackgroundSwitcher";
import { allAssets } from "../Utility/baseAssets";
import { globalKonnect } from "../Utility/data";
const Home = () => {
  const swiperRef = useRef();
  const autoPlayDelayDuration = 2000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  const [direction, setDirection] = useState("up");
  const homeData = globalKonnect.home;
  const bgImages = [
    allAssets.NEIbg,
    allAssets.Dubaibg,
    allAssets.Singaporebg,
    allAssets.Thailandbg,
    allAssets.Balibg,
  ];

  const cardImages = [
    allAssets.Homeimg1,
    allAssets.Homeimg3,
    allAssets.Homeimg5,
    allAssets.Homeimg7,
    allAssets.Homeimg9,
  ];

  const next = () => {
    if (isTablet) {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= bgImages.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(nextIndex);
      }
    } else {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, autoPlayDelayDuration);

    const handleSlideChange = () => {
      const slides = swiperRef.current.slides;
      slides.forEach((slide, index) => {
        if (index === swiperRef.current.activeIndex) {
          slide.style.transform = "scale(1)"; // Zoom the centered slide
          slide.style.borderRadius = "0"; // Remove border-radius from the centered slide
          slide.style.transition =
            "transform 0.5s ease, opacity 0.5s ease, border-radius 0.5s ease"; // Smooth transition
        } else {
          slide.style.transform = "scale(0.8)"; // Reset scale on other slides
          slide.style.borderRadius = "1.5rem"; // Restore border-radius on other slides
          slide.style.transition =
            "transform 0.5s ease, opacity 0.5s ease, border-radius 0.5s ease"; // Smooth transition
        }
      });
    };
    const swiperInstance = swiperRef.current;
    swiperInstance.on("slideChange", handleSlideChange);

    // Initial setup
    handleSlideChange();

    return () => {
      swiperInstance.off("slideChange", handleSlideChange);
      clearInterval(interval);
    };
  });

  return (
    <div
      id="home"
      className="relative h-screen font-Alata text-Yellow flex flex-col items-center justify-center"
    >
      <BackgroundSwitcher
        images={bgImages}
        currentIndex={currentIndex}
        direction={direction}
      />

      <div className="absolute h-screen flex flex-col items-center justify-start max-md:justify-center max-md:items-center pt-[25vh]">
        <div className="w-[70vw] max-md:w-[90vw] h-[150px] pb-48 max-md:pb-0">
          <TextTransition
            delay={100}
            className="text-[7.5vh] max-md:text-[60px] max-sm:text-[45px] text-white font-Rammetto text-start max-md:text-center w-[70vw]"
            springConfig={presets.gentle}
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
              <p className="my-5 flex items-start justify-start max-md:justify-center max-md:items-center flex-col tracking-[3px] max-md:text-[25px] max-sm:text-[15px] max-md:pl-4 max-sm:pl-0">
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

          <Swiper
            className="w-[50vw] h-[50vh]"
            modules={[Navigation, Pagination]}
            loop={true}
            centeredSlides={false}
            pagination={{ clickable: true }}
            spaceBetween={50}
            allowTouchMove={false}
            speed={1000}
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
            style={{
              display: isTablet ? "none" : "block",
            }}
          >
            {cardImages.map((value, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
