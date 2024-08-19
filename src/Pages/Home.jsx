/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import TextTransition, { presets } from "react-text-transition";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imag1 from "../assets/test/1.jpg";
import imag2 from "../assets/test/2.jpg";
import imag3 from "../assets/test/3.jpg";
import BackgroundSwitcher from "../Components/BackgroundSwitcher";
import { allAssets } from "../Utility/baseAssets";
import { globalKonnect } from "../Utility/data";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, otherLinks } = globalKonnect.home[0];

  const swiperRef = useRef();

  const [isNext, setIsNext] = useState(false);

  const images = [imag1, imag2, imag3];
  const texts = ["Forest", "Building", "Tree"];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsNext(true);
    goToSlide(currentIndex);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsNext(false);
    goToSlide(currentIndex);
  };

  const image1 = allAssets.visaImg1;
  const image2 = allAssets.visaImg2;
  const image3 = allAssets.visaImg3;
  const visaImages = [image1, image2, image3];

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div id="home" className="relative h-screen  font-Alata text-Yellow flex flex-col items-center justify-center">
      <BackgroundSwitcher images={images} currentIndex={currentIndex} />

      <div className="absolute h-screen flex items-center justify-center">
        <div className="flex space-x-4 flex-col items-center justify-center w-[50vw] h-[50vh] ">
          <TextTransition
            className="text-[5rem] text-white font-Rammetto text-start w-[25rem]"
            springConfig={presets.wobbly}
            direction={isNext ? "up" : "down"}
          >
            {texts[currentIndex]}
          </TextTransition>
          <div className="flex-col flex items-center justify-center w-[50vw]">
            <p className="text-xl w-[25rem] text-start">{description}</p>

            <p className="my-5 flex items-center justify-evenly">
              {otherLinks}
              <span className="mx-5">
                <button
                  type="button"
                  className="px-6 py-2 bg-Yellow text-black rounded-3xl flex items-center justify-center"
                >
                  Book Now
                  <span className="mx-2 bg-white rounded-full">
                    <IoIosArrowDropright size={20} />
                  </span>
                </button>
              </span>
            </p>
          </div>
          <button
            onClick={previous}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Next
          </button>
        </div>
        <Swiper
          className="w-[50vw] h-[50vh]"
          modules={[Navigation, Pagination]}
          // spaceBetween={50}
          // slidesPerView={1}
          navigation
          speed={300}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            611: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.2 },
          }}
        >
          {visaImages.map((value, index) => (
            <SwiperSlide key={index}>
              <img
                src={value}
                className="h-[30rem]"
                onClick={() => {
                  goToSlide(index);
                  next();
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
