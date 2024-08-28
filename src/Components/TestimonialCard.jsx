import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
import { allAssets } from "../Utility/baseAssets";
import { globalKonnect } from "../Utility/data";

function TestimonialCard() {
  const { testimonials } = globalKonnect;
  const swiperRef = useRef();
  const arrowLeft = allAssets.arrowLeft;
  const arrowRight = allAssets.arrowRight;
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="overflow-x-hidden">
      {/* Non-Swiper Section for Larger Screens */}
      <div className="py-5 max-md:hidden">
        {testimonials.map((value, index) => (
          <div
            key={index}
            className="h-[11rem] w-[32rem] my-10 p-5 bg-white rounded-3xl flex flex-col items-center justify-center font-Alata text-base"
          >
            <p className="text-center">{value.text}</p>
            <div className="mt-2 text-end w-[30rem]">-{value.people}</div>
          </div>
        ))}
      </div>

      {/* Swiper Section for Mobile Screens */}
      <div className="flex items-center justify-evenly w-[100vw]">
        <div
          className="swiper-button-prev md:hidden flex items-center justify-center cursor-pointer rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img
            src={arrowLeft}
            alt="prev"
            className="h-12 max-md:h-10 max-sm:h-[30px]"
          />
        </div>
        <div className="w-[80vw] flex items-center justify-evenly md:hidden font-Alata text-lg">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={3000}
            slidesOffsetAfter={isMobile ? 10 : 50}
            centeredSlides={true}
            centeredSlidesBounds={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              335: { slidesPerView: 1.1, spaceBetween: 20 },
              360: { slidesPerView: 1.2, spaceBetween: 20 },
              370: { slidesPerView: 1.23, spaceBetween: 20 },
              380: { slidesPerView: 1.25, spaceBetween: 20 },
              390: { slidesPerView: 1.28, spaceBetween: 20 },
              400: { slidesPerView: 1.3, spaceBetween: 20 },
              410: { slidesPerView: 1.4, spaceBetween: 20 },
              460: { slidesPerView: 1.5, spaceBetween: 20 },
              480: { slidesPerView: 1.55, spaceBetween: 20 },
              530: { slidesPerView: 1.6, spaceBetween: 20 },
              560: { slidesPerView: 1.7, spaceBetween: 20 },
              590: { slidesPerView: 1.8, spaceBetween: 20 },
              600: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              660: { slidesPerView: 1.6, spaceBetween: 30 },
              720: { slidesPerView: 1.7, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            {testimonials.map((value, index) => (
              <SwiperSlide key={index}>
                <div className="h-[20rem] flex-col max-sm:h-[13rem] max-sm:w-[240px]  sm:w-[20rem] md:w-[30rem] max-sm:text-xs my-10 p-5 bg-white rounded-3xl flex items-center justify-center">
                  <p className="text-center">{value.text}</p>
                  <div className="mt-2 text-end">- {value.people} -</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="swiper-button-next md:hidden flex items-center justify-center cursor-pointer rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img
            src={arrowRight}
            alt="next"
            className="h-12 max-md:h-10 max-sm:h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
