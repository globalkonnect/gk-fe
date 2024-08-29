import React, { useEffect, useRef } from "react";
import { allAssets } from "../Utility/baseAssets";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";

function ServiceCard() {
  const airplane = allAssets.airplane;
  const change = allAssets.change;
  const honeymoon = allAssets.honeymoon;
  const visa = allAssets.visa;
  const swiperRef = useRef(null);
  const arrowLeft = allAssets.arrowLeft;
  const arrowRight = allAssets.arrowRight;

  const tools = [
    { icon: airplane, title: "Exclusive flight deals" },
    { icon: honeymoon, title: "Specially curated travel packages" },
    { icon: visa, title: "Hassle-free visa assistance" },
    { icon: change, title: "Forex services" },
    { icon: airplane, title: "Exclusive flight deals" },
    { icon: honeymoon, title: "Specially curated travel packages" },
    { icon: visa, title: "Hassle-free visa assistance" },
    { icon: change, title: "Forex services" },
  ];

  useEffect(() => {
    const handleSlideChange = () => {
      if (!swiperRef.current) return;
      const slides = swiperRef.current.slides;
      slides.forEach((slide, index) => {
        if (index === swiperRef.current.activeIndex) {
          slide.style.transform = "scale(1)"; // Zoom the active (centered) slide
          slide.style.transition = "transform 0.5s ease"; // Smooth transition
        } else {
          slide.style.transform = "scale(0.7)"; // Scale down the non-active slides
          slide.style.transition = "transform 0.5s ease"; // Smooth transition
        }
      });
    };

    if (swiperRef.current) {
      swiperRef.current.on("slideChange", handleSlideChange);
      handleSlideChange();
    }

    // Clean up event listener on component unmount
    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* <div
        className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <img src={arrowLeft} alt="prev" className="h-12 max-md:h-10" />
      </div> */}

      <div className="w-[95vw] lg:w-[90vw]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0 }}
          speed={3000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Full-width on small screens
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 }, // Slightly zoomed out on small tablets
            768: { slidesPerView: 3 }, // 1.5 slides visible on tablets
            1000: { slidesPerView: 3 }, // 2 slides visible on desktops
            1280: { slidesPerView: 3 }, // 3 slides visible on larger screens
          }}
        >
          {tools.map((value, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex-col flex items-center justify-center text-center text-white text-base max-sm:text-sm">
                <div className=" m-6 p-2 rounded-full bg-Yellow flex items-center justify-center w-32 h-32   shadow-2xl">
                  <img
                    src={value.icon}
                    className="size-20 p-2"
                    alt={value.title}
                  />
                </div>
                <p className="w-[14rem] max-md:w-[8rem] pb-10 ">
                  {value.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 
      <div
        className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <img src={arrowRight} alt="next" className="h-12 max-md:h-10" />
      </div> */}
    </div>
  );
}

export default ServiceCard;
