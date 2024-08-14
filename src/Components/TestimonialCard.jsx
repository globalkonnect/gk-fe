import React from "react";
import { globalKonnect } from "../Utility/data";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
function TestimonialCard() {
  const { testimonials } = globalKonnect;
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
      <div className="w-[99vw] flex items-center justify-evenly md:hidden font-Alata text-lg">
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
          {testimonials.map((value, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="h-[25rem] w-[25rem] max-sm:h-[20rem] max-sm:w-[20rem] my-10 p-5 bg-white rounded-3xl flex items-center justify-center  "
                >
                  {value}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default TestimonialCard;
