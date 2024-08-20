import React from "react";
import { allAssets } from "../Utility/baseAssets";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

function TourCard() {
  const card1 = allAssets.northEI;
  const card2 = allAssets.Dubai;
  const card3 = allAssets.Thailand;
  const cards = [
    {
      card: card1,
      name: "North East India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card2,
      name: " Dubai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card3,
      name: "Thailand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card1,
      name: "North East India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card2,
      name: " Dubai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card3,
      name: "Thailand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card1,
      name: "North East India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card2,
      name: " Dubai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card3,
      name: "Thailand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card1,
      name: "North East India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card2,
      name: " Dubai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
    {
      card: card3,
      name: "Thailand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima?",
    },
  ];
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
        <img
          src={arrowLeft}
          alt="prev"
          className="h-12 max-md:h-10 max-sm:h-8"
        />
      </div>
      <div className="swiper-container flex items-center justify-center rounded-3xl w-[85vw] md:w-[78vw] max-md:w-[66vw] max-sm:w-[50vw] sm:w-[60vw]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            880: { slidesPerView: 1.7 },
            1024: { slidesPerView: 2 },
            1109: { slidesPerView: 2.3 },
            1280: { slidesPerView: 2.5 },
            1500: { slidesPerView: 3 },
          }}
        >
          {cards.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="tour-card-wrapper sm:w-[23rem] ">
                <img
                  src={value.card}
                  className="tour-card h-full w-full "
                  alt={`Card ${index}`}
                />
                <div className="tour-card-overlay">
                  <div className="overlay-text ">{value.name}</div>
                </div>
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
        <img
          src={arrowRight}
          alt="next"
          className="h-12 max-md:h-10 max-sm:h-8"
        />
      </div>
    </div>
  );
}

export default TourCard;
