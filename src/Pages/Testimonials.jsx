import React from 'react'
import TestimonialCard from '../Components/TestimonialCard'
import { allAssets } from '../Utility/baseAssets'
function Testimonials() {
  const bg = allAssets.bgTestimonial
  return (
    <div className='py-10 flex flex-col items-center justify-center bg-Offwhite font-Rammetto text-3xl bg-cover bg-center'
    style={{ backgroundImage: `url(${bg})`}}
    >
         <p className="py-5">
        <span className="max-md:hidden">-</span>Testimonials
        <span className="max-md:hidden">-</span>
      </p>
        <TestimonialCard />
    </div>
  )
}

export default Testimonials