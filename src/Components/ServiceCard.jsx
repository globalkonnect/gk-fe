import React, { useEffect } from "react";
import { allAssets } from "../Utility/baseAssets";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

function ServiceCard() {
  const airplane = allAssets.airplane;
  const change = allAssets.change;
  const honeymoon = allAssets.honeymoon;
  const visa = allAssets.visa;
  const swiperRef = useRef();
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
      const slides = swiperRef.current.slides;
      slides.forEach((slide, index) => {
        if (index === swiperRef.current.activeIndex) {
          slide.style.transform = "scale(1.2)"; // Zoom the active (centered) slide
          slide.style.transition = "transform 0.5s ease"; // Smooth transition
        } else {
          slide.style.transform = "scale(0.9)"; // Scale down the non-active slides
          slide.style.transition = "transform 0.5s ease"; // Smooth transition
        }
      });
    };

    const swiperInstance = swiperRef.current;
    swiperInstance.on("slideChange", handleSlideChange);

    // Initial scale setup
    handleSlideChange();

    // Clean up event listener on component unmount
    return () => {
      swiperInstance.off("slideChange", handleSlideChange);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        className="swiper-button-prev flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <img src={arrowLeft} alt="prev" className="h-12 max-md:h-10" />
      </div>

      <div className="w-[85vw]">
        <Swiper
          // modules={[Autoplay]}
          loop={true}
          // autoplay={{ delay: 0 }}
          speed={3000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Full-width on small screens
            480: { slidesPerView: 1 }, // Slightly zoomed out on small tablets
            768: { slidesPerView: 1.5 }, // 1.5 slides visible on tablets
            1024: { slidesPerView: 2 }, // 2 slides visible on desktops
            1280: { slidesPerView: 3 }, // 3 slides visible on larger screens
          }}
        >
          {tools.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="flex-col items-center justify-center text-center text-white text-xl">
                <div className="text-xl m-10 rounded-full bg-Yellow flex items-center justify-center size-[10rem] shadow-2xl">
                  <img
                    src={value.icon}
                    className="p-2 size-28"
                    alt={value.title}
                  />
                </div>
                <p className="w-[15rem]">{value.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="swiper-button-next flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <img src={arrowRight} alt="next" className="h-12 max-md:h-10" />
      </div>
    </div>
  );
}

export default ServiceCard;
