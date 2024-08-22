import TestimonialCard from "../Components/TestimonialCard";
import { allAssets } from "../Utility/baseAssets";

function Testimonials() {
  // Destructuring the background image for the Testimonials section from allAssets
  const { bgTestimonial, Line } = allAssets;
  const { img5, img10 } = allAssets;

  return (
    <div
      id="testimonials"
      className="relative pb-10 pt-[10rem] flex flex-col items-start justify-center font-Rammetto text-3xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgTestimonial})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative z-10 text-center">
        {/* Title */}
        <img
          src={img10}
          className="h-36 w-36 stroke-white absolute right-2 max-sm:bottom-[25rem] sm:bottom-[35rem] md:bottom-[70rem] lg:hidden"
        />
        <img
          src={img5}
          className="stroke-white absolute right-2 bottom-[39rem] max-lg:hidden"
        />

        <p
          className="py-5 m-10 text-white text-start max-sm:text-center max-sm:w-full max-sm:m-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <span className="max-md:hidden">-</span>Testimonials
          <span className="max-md:hidden">-</span>
        </p>

        {/* Testimonial card section */}
        <div className="flex items-center justify-start w-full">
          <img
            src={Line}
            className="bg-white md:w-[40vw] xl:w-[50vw] max-md:hidden"
          />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
