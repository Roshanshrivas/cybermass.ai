import React from 'react'
import Navbar from '../components/Common/Navbar'
import HeadingText from '../components/Common/HeadingText'
import CTAButton from '../components/Common/CTAButton'
import { FaArrowRight } from 'react-icons/fa'
import TextWithImage from '../components/PageComponents/AIAcademy/TextWithImage'
import academyImage from "../assets/imgDmmy.png"
import academyImage2 from "../assets/bgAi.png"
import { Link } from 'react-router-dom'
import BlogPost from '../components/PageComponents/AIAcademy/BlogPost'
import Footer from '../components/Common/Footer'
import GetStarted from '../components/PageComponents/AIAcademy/GetStarted'
import backgroundImage from "../assets/stars.svg"

const AiAcademy = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden bg-[#140735] text-white'>
       
       <Navbar />
       <HeadingText 
         backgroundImage={backgroundImage}
         heading1="Welcome" 
         highlighttext1="to"
         heading2="AI"
         heading3=""
         highlighttext2="Academy"
         desc1="Learn how to harness the power of AI with our in-depth tutorials and resources."
      />

      <div className='flex justify-center items-center xl:-mt-[70px] mobile-s:mt-0'>
        <button className='flex items-center gap-2 px-7 py-3 border border-[#6b0ba7] shadow-[0px_5px_100px_0px_#993efc]
        hover:border-[#993ef9] rounded-full text-white text-[16px] hover:scale-105 transition-all duration-100 ease-in-out 
        hover:text-[#993efc]'>
          Start Learning <FaArrowRight className='mt-1'/>
        </button>
      </div>

      <div className='h-[150px]'></div>

      <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-edu-sa">
           Your AI Journey Starts Here
      </h1>

      <TextWithImage 
          title={"Start Your AI Journey"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante at enim facilisis dignissim. Sed viverra, neque ut pulvinar elementum, velit nulla facilisis sem, vel laoreet metus ipsum acvelit."}
          boldpoint1={"Bold Points 1"}
          boldpoint2={"Bold Points 2"}
          image={academyImage}
      />


    {/* Register today  */}

      <GetStarted 
        title="Register Today & Start Exploring the Endless Possibilities."
        linkText="Get Started"
        link="/"
      />


      <TextWithImage 
          title={"Start Your AI Journey"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante at enim facilisis dignissim. Sed viverra, neque ut pulvinar elementum, velit nulla facilisis sem, vel laoreet metus ipsum acvelit."}
          boldpoint1={"Bold Points 1"}
          boldpoint2={"Bold Points 2"}
          image={academyImage2}
      />

      <BlogPost 
        heading="AI Academy"
      />

      <div className='h-[150px]'></div>
      <Footer />
    
    </div>

    
  )
}

export default AiAcademy
