import React from 'react'
import Navbar from '../components/Common/Navbar'
import img1 from "../assets/stars.svg"
import HeadingText from '../components/Common/HeadingText'
import Footer from '../components/Common/Footer'
import ContactForm from '../components/PageComponents/ContactUs/ContactForm'

const Contact = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden bg-[#140735] text-white'>
      <Navbar />
      <HeadingText 
         heading1="Connect With Us" 
         highlighttext1=""
         heading2=""
         heading3=""
         highlighttext2="Contact Us.."
         desc1="We're always ready to assist you with any queries, feedback, or support."
         backgroundImage={img1}
      />


      <ContactForm />
      
      <div className='h-[10vh]'></div>


    <Footer />

    </div>
  )
}

export default Contact
