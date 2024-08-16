import React from "react";
import { allAssets } from "../Utility/baseAssets";
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";

function TourCard() {
  const card1 = allAssets.northEI;
  const card2 = allAssets.Dubai;
  const card3 = allAssets.Thailand;
  const cards = [card1, card2, card3, card1, card2, card3];

  return (
    <div className="flex items-center justify-evenly rounded-3xl w-[99vw]">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 0 }}
        speed={3000}
        centeredSlides={true}
        centeredSlidesBounds={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          611: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {cards.map((value, index) => (
          <SwiperSlide key={index}>
            <img
              src={value}
              className="m-5 ml-0 h-[30rem] w-[30rem] rounded-3xl"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TourCard;
