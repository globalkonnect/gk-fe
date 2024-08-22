import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
import { allAssets } from "../Utility/baseAssets";

function VisaServiceCard() {
  const image1 = allAssets.visaImg1;
  const image2 = allAssets.visaImg2;
  const image3 = allAssets.visaImg3;
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const visaImages = [
    { image: image1, name: "Singapore" },
    { image: image2, name: "Bali" },
    { image: image3, name: "Thailand" },
    { image: image1, name: "Singapore" },
    { image: image2, name: "Bali" },
    { image: image3, name: "Thailand" },
  ];

  const swiperRef = useRef();

  return (
    <div className="visaservices flex items-center justify-evenly w-full overflow-x-hidden">
      <div className="w-[85vw] max-sm:w-[98vw] flex items-center justify-evenly">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0 }}
          slidesOffsetBefore={isMobile ? 50 : 100}
          speed={3000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Full-width on small screens
            480: { slidesPerView: 1 }, // Full-width on small screens
            550: { slidesPerView: 1 }, // Full-width on small screens
            600: { slidesPerView: 1 }, // Full-width on small screens
            650: { slidesPerView: 1.5 }, // Full-width on small screens
            680: { slidesPerView: 1.6 }, // Slightly zoomed out on small tablets
            720: { slidesPerView: 1.7 }, // Slightly zoomed out on small tablets
            770: { slidesPerView: 1.4 }, // Slightly zoomed out on small tablets
            810: { slidesPerView: 1.5 }, // 1.5 slides visible on tablets
            1020: { slidesPerView: 1.8 }, // 2.5 slides visible on desktops
            1200: { slidesPerView: 2.2 }, // 3 slides visible on larger screens
            1500: { slidesPerView: 3 }, // 3 slides visible on larger screens
          }}
        >
          {visaImages.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="visa-card-wrapper relative m-5 h-[26rem] w-[26rem] max-sm:w-[80vw] max-md:h-[40vh] max-md:w-[20rem] rounded-3xl overflow-hidden">
                <img
                  src={value.image}
                  className="visa-card-image h-full w-full object-cover rounded-3xl transition-all duration-500"
                  alt={`slide-${index}`}
                />
                <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500 flex justify-center items-center">
                  <p className="text-white text-2xl">{value.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VisaServiceCard;
