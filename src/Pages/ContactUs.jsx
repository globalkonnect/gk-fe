import React from 'react'
import {globalKonnect }from "../Utility/data"
import ContactForm from '../Components/ContactForm'
function ContactUs() {
  const title = globalKonnect.contact.title
  const contact = globalKonnect.contact.subtitle
  return (
    <div className="w-full text-black flex-col flex py-4 items-center justify-center bg-Yellow"> 
     <p className='font-Rammetto text-3xl py-4 w-full text-center max-sm:text-2xl'>{title}</p> 
     <p className='font-Alata rounded-3xl px-4 py-2 bg-black text-Yellow '>{contact}</p>

     <div className='w-[45vw] mt-[3rem] max-md:w-[80vw]'><ContactForm /></div>
    </div>
  )
}

export default ContactUs