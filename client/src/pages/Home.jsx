import React, { useEffect } from 'react'
import Navbar from '../components/Common/Navbar'
import Slider from '../components/Common/Slider'
import HeadingText from '../components/Common/HeadingText'
import CTAButton from '../components/Common/CTAButton'
import { FaArrowDown } from 'react-icons/fa'
import HighlightText from '../components/Common/HighlightText'
import { FaArrowDownLong, FaSackDollar } from "react-icons/fa6";
import TabSection from '../components/Common/TabSection'
import FeaturedTools from '../components/Common/FeaturedTools'
import { Link, useNavigate } from 'react-router-dom'
 import img from "../assets/img.webp"
import Footer from '../components/Common/Footer'
import img1 from "../assets/stars.svg"
import BlogPost from '../components/PageComponents/AIAcademy/BlogPost'
import GetStarted from "../components/PageComponents/AIAcademy/GetStarted"
import SubscriptionPlans from '../components/Common/SubscriptionPlane'
import CategoriesItem from '../components/Common/CategoriesItem'



const Home = () => {

  return (
    <div className="w-full overflow-x-hidden bg-[#140735] text-white relative">
      <Navbar />

      {/*==========> section 1 <================= */}

      <div
        className="relative w-full h-full bg-cover bg-left mt-[20px]">
        <div className="absolute inset-0 opacity-50"></div> 
        <div className="relative z-20 flex flex-col justify-center items-center h-full">
        {/* <Slider /> */}
        <HeadingText 
         heading1="Find" 
         highlighttext1="AI"
         heading2="Tool"
         heading3="For"
         highlighttext2="Everything"
         desc1="Your Ultimate AI Tool Directory, Including Prompts and ChatGPT Plugins. 
                Get Things Done at Lightning Speed ⚡ with AI."
        backgroundImage={img1}
      />

     </div>
   </div>

      {/* Buttons & Arrow  */}
      <div className="flex flex-col justify-center items-center">
        {/* Arrow sign */}
        <div className="xl:text-[28px] mt-[-80px] mb-9 text-[#C276F0]
         mobile-s:text-[22px] mobile-s:mt-[-10px] mobile-s:mb-2
         mobile-l:mt-[-50px]">
          <FaArrowDown />
        </div>

        {/* Button  */}
        <div className="flex xl:mt-[50px] xl:mb-[100px] xl:gap-x-8 
         mobile-s:mb-[10px] mobile-s:mt-[30px] mobile-s:gap-x-4
         custom-md:mb-[80px]
         ">
          <CTAButton active={true} linkto={"/"}>
            Ai Tool List
          </CTAButton>
          <CTAButton active={false} linkto={"/"}>
            Academy
          </CTAButton>
        </div>
      </div>


    {/*============== section 2  ==================*/}
      
    <CategoriesItem /> 



      {/*==============> section 3 <================ */}
      <div className="min-h-screen w-screen overflow-x-hidden">
        <TabSection />
      </div>



      {/*==============> section 4 <================*/}
      <div className="min-h-screen w-screen overflow-x-hidden">
        <FeaturedTools />
      </div>



      {/*==============> section 5 <================= */}
        <div className="min-h-screen w-screen overflow-x-hidden flex justify-center items-center">
           <div className="w-11/12 flex xl:flex-nowrap mobile-s:flex-wrap gap-4 mt-[150px]">
             {/* Left Box */}
             <div className="w-full xl:w-1/2 h-auto xl:h-[60vh] flex flex-col justify-center">
               <div className="mobile-s:text-3xl custom-md:text-4xl xl:text-5xl font-bold p-4">
                 <h1>
                   Your <HighlightText text={"AI Journey "} /> Starts Here
                 </h1>
               </div>

               <div className="p-4 text-sm xl:text-base">
                 <p>
                   Hey there, Welcome to cybermass.ai the ultimate AI playground. We're all about unleashing the power of AI in three awesome ways: first, we've got a treasure directory of AI tools for every need; second, we help you supercharge your business with AI services and tools; and third, we're your go-to AI academy for learning the ropes. Ready to dive in?
                 </p>
               </div>
         
               <div className="p-4">
                 <Link to={"/"}>
                   <button className="px-6 py-2 rounded-full border hover:border-[#7c34c9] hover:text-[#7c34c9] transition-all duration-200 hover:scale-105 text-sm xl:text-base">
                     AI Tools
                   </button>
                 </Link>
               </div>
             </div>
         
             {/* Right Box */}
             <div className="w-full xl:w-1/2 h-auto xl:h-[60vh] flex justify-center items-center">
               <img
                 src={img}
                 className="w-full h-auto max-h-[300px] xl:max-h-none object-cover"
               />
             </div>
           </div>
        </div>



      {/*================> section 6 <================*/}
        <BlogPost 
          heading="Learn How To Get Started With AI"
        />


      {/*=================> section 7 <=================*/}

        <SubscriptionPlans />




      {/*================> section 8 <=================*/}
      <GetStarted 
        title="Register Today & Start Exploring the Endless Possibilities."
        linkText="Get Started"
        link="/"
      />

      
      {/*==================> section 9 <===============*/}
      <div className='mt-[100px]'>
        <Footer />
      </div>



    </div>
  );
}

export default Home
