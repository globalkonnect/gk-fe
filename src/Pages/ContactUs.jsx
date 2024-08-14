import React from "react";
import { globalKonnect } from "../Utility/data";
import ContactForm from "../Components/ContactForm";

function ContactUs() {
  // Destructuring title and subtitle from globalKonnect contact data
  const { title, subtitle } = globalKonnect.contact;

  return (
    <div className="w-full text-black flex-col flex py-4 items-center justify-center bg-Yellow">
      {/* Title section */}
      <p className="font-Rammetto text-3xl py-4 w-full text-center max-sm:text-2xl">
        {title}
      </p>

      {/* Subtitle section */}
      <p className="font-Alata rounded-3xl px-4 py-2 bg-black text-Yellow">
        {subtitle}
      </p>

      {/* Contact form container */}
      <div className="w-[45vw] mt-[3rem] max-md:w-[80vw]">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
