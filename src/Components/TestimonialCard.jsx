import React from "react";
import { globalKonnect } from "../Utility/data";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { allAssets } from "../Utility/baseAssets";
function TestimonialCard() {
  const { testimonials } = globalKonnect;
  const swiperRef = useRef();
  const arrowLeft = allAssets.arrowLeft;
  const arrowRight = allAssets.arrowRight;
  return (
    <>
      <div className="py-5">
        {testimonials.map((value, index) => {
          return (
            <div
              key={index}
              className="h-[10rem] w-[35rem] my-10 p-5 bg-white rounded-3xl flex items-center justify-center font-Alata text-lg max-md:hidden"
            >
              {value}
            </div>
          );
        })}
      </div>

      {/* mobile */}
      <div className="flex items-center justify-evenly w-full overflow-x-hidden">
      <div
        className="swiper-button-prev md:hidden flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <img src={arrowLeft} alt="prev" className="h-12 max-md:h-10" />
      </div>
      <div className="w-[80vw] flex items-center justify-evenly md:hidden font-Alata text-lg">
        <Swiper
          // modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2 }}
          speed={3000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            611: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {testimonials.map((value, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="h-[25rem] w-[20rem] max-sm:h-[20rem] max-sm:w-[20rem] my-10 p-5 bg-white rounded-3xl flex items-center justify-center  "
                >
                  {value}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className="swiper-button-next md:hidden flex items-center justify-center size-20 cursor-pointer backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <img src={arrowRight} alt="next" className="h-12 max-md:h-10" />
      </div>
      </div>
    </>
  );
}

export default TestimonialCard;
