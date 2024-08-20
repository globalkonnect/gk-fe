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
    <div className="overflow-x-hidden">
      <div className="py-5">
        {testimonials.map((value, index) => {
          return (
            <div
              key={index}
              className="h-[10rem] w-[32rem] my-10 p-5  bg-white rounded-3xl flex items-center justify-center font-Alata text-lg max-md:hidden"
            >
              {value}
            </div>
          );
        })}
      </div>

      {/* mobile */}
      <div className="flex items-center justify-evenly w-[100vw] ">
      <div
        className="swiper-button-prev md:hidden   flex items-center justify-center  cursor-pointer  rounded-full"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <img src={arrowLeft} alt="prev" className="h-12 max-md:h-10 max-sm:h-[30px] " />
      </div>
      <div className="w-[80vw] flex items-center justify-evenly md:hidden font-Alata text-lg">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 5 }}
          speed={3000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            440:{slidesPerView:1.4},
            455:{slidesPerView: 1.5},
          
            
          }}
        >
          {testimonials.map((value, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="h-[20rem]  max-sm:h-[13rem] max-sm:w-[15rem] sm:w-[20rem] md:w-[30rem]   max-sm:text-xs my-10 p-5 bg-white rounded-3xl flex items-center justify-center  "
                >
                  {value}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className="swiper-button-next md:hidden  flex items-center justify-center  cursor-pointer  rounded-full"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <img src={arrowRight} alt="next" className="h-12 max-md:h-10 max-sm:h-[30px] " />
      </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
