import React from 'react'
import Navbar from '@/components/navbar/page'
import Hero from '@/app/Hero/page'
// import Testimonial from '@/components/Testimonial/page'
import Footer from '@/components/footer/page'
// import TrustedBy from '@/app/Trust/page'
import Cards from '@/app/Cards/page'
const page = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      {/* <Testimonial /> */}
      <Cards />
      <Footer /> 
     
    </div>
  )
}

export default page
