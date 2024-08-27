import React from "react";
import { globalKonnect } from "../Utility/data";
import ContactForm from "../Components/ContactForm";

function ContactUs() {
  // Destructuring title and subtitle from globalKonnect contact data
  const { title, subtitle } = globalKonnect.contact;

  return (
    <div
      id="contactus"
      className="w-full h-[25rem] text-black flex-col flex  items-center justify-center bg-Yellow "
    >
      {/* Title section */}
      <p
        className="font-Rammetto text-3xl  w-full text-center max-sm:text-2xl"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        {title}
      </p>

      {/* Subtitle section */}
      <p className="font-Alata rounded-3xl px-4 my-5 py-2 bg-black text-Yellow">
        {subtitle}
      </p>

      {/* Contact form container */}
      <div className="w-[45vw]  max-md:w-[80vw] -mb-[12rem] mt-[1rem]">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
