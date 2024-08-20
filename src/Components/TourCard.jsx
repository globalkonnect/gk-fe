import React from "react";
import { allAssets } from "../Utility/baseAssets";
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css"; // Import Swiper styles

function TourCard() {
  const card1 = allAssets.northEI;
  const card2 = allAssets.Dubai;
  const card3 = allAssets.Thailand;
  const cards = [card1, card2, card3, card1, card2, card3];
  const arrowLeft = allAssets.arrowLeft;
  const arrowRight = allAssets.arrowRight;
  const swiperRef = useRef();
  
  return (
    <div className="flex items-center justify-evenly w-full overflow-x-hidden">
      <div
        className="swiper-button-prev flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <img src={arrowLeft} alt="prev" className="h-12 max-md:h-10" />
      </div>
      <div className="flex items-center justify-evenly rounded-3xl w-[85vw] max-md:w-[65vw]">
        <Swiper
          // modules={[Autoplay]}
          loop={true}
          speed={3000}
          centeredSlides={true}
          // centeredSlidesBounds={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Full-width on small screens
            480: { slidesPerView: 1 }, // Slightly zoomed out on small tablets
            768: { slidesPerView: 1.5}, // 1.5 slides visible on tablets
            1024: { slidesPerView: 2 }, // 2.5 slides visible on desktops
            1280: { slidesPerView: 3 }, // 3 slides visible on larger screens
          }}
        >
          {cards.map((value, index) => (
            <SwiperSlide key={index}>
              <img
                src={value}
                className="tour-card m-5  h-[30rem] w-[25rem] max-sm:w-[57vw] max-md:h-[25rem] max-md:w-[20rem]  rounded-3xl"
              />
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

export default TourCard;
