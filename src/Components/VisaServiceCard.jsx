import "swiper/css"; // Core Swiper CSS
import "swiper/css/autoplay"; // Autoplay module CSS (if required)
import { Autoplay } from "swiper/modules"; // Correct module path
import { Swiper, SwiperSlide } from "swiper/react";
import { allAssets } from "../Utility/baseAssets";
function VisaServiceCard() {
  const image1 = allAssets.visaImg1;
  const image2 = allAssets.visaImg2;
  const image3 = allAssets.visaImg3;
  const visaImages = [image1, image2, image3, image1, image2, image3];
  return (
    <div className="w-[99vw] flex items-center justify-evenly">
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
        {visaImages.map((value, index) => (
          <SwiperSlide key={index}>
            <img src={value} className="h-[30rem]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VisaServiceCard;
