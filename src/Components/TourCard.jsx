import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { allAssets } from "../Utility/baseAssets";

function TourCard() {
  const card1 = allAssets.northEI;
  const card2 = allAssets.Dubai;
  const card3 = allAssets.Thailand;
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
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
      {/* <div
        className="swiper-button-prev flex items-center  justify-center  cursor-pointer   rounded-full"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <img
          src={arrowLeft}
          alt="prev"
          className="h-12 max-md:h-10 max-sm:h-7"
        />
      </div> */}

      <Swiper
        className="swiper-container  md:w-[78vw] max-md:w-[66vw] max-sm:w-[75vw] sm:w-[60vw]"
        modules={[Autoplay]}
        autoplay={{ delay: 8 }}
        loop={true}
        slidesOffsetBefore={isMobile ? 10 : 50}
        speed={2000}
        centeredSlides={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          640: { slidesPerView: 0.8 },
          670: { slidesPerView: 0.9 },
          720: { slidesPerView: 1 },
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
            <div className="tour-card-wrapper md:w-[23rem] max-md:w-[23rem] max-sm:w-[70vw] max-sm:h-[300px]">
              <img
                src={value.card}
                className="tour-card h-full w-full "
                alt={`Card ${index}`}
              />
              <div className="tour-card-overlay">
                <div className="overlay-text max-md:text-xl">{value.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div
        className="swiper-button-next flex items-center justify-center  cursor-pointer z-10 rounded-full"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <img
          src={arrowRight}
          alt="next"
          className="h-12 max-md:h-10 max-sm:h-8 "
        />
      </div> */}
    </div>
  );
}

export default TourCard;
