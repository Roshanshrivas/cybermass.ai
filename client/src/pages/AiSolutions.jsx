import React from 'react'
import Navbar from '../components/Common/Navbar'
import HeadingText from '../components/Common/HeadingText'
import img1 from "../assets/stars.svg"
import CTAButton from '../components/Common/CTAButton'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaRegCheckCircle, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '../components/Common/Button'
import TextWithImage from "../components/PageComponents/AIAcademy/TextWithImage"
import founder from "../assets/founder.jpg"
import cofounder from "../assets/cofounder.jpg"
import earth from "../assets/earthFull.jpg"
import { IoEarthOutline } from 'react-icons/io5'
import { RiExchangeDollarFill } from 'react-icons/ri'
import HighlightText from '../components/Common/HighlightText'
import { CiSettings } from 'react-icons/ci'
import { BsArrowRepeat } from 'react-icons/bs'
import { IoMdSpeedometer } from 'react-icons/io'
// import background1 from "../assets/hero-background.jpg"
import robot from "../assets/background.jpg"
import FAQ from '../components/Common/FAQ'
import Footer from "../components/Common/Footer"


const AiSolutions = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden bg-[#02070d] text-white font-Ubuntu'>
      <Navbar />

       <div className='w-full xl:h-full mobile-s:h-auto mobile-s:mt-[70px] xl:mt-0'>
         <div className='h-[80%] flex flex-col justify-center items-center'>
           <h1 className='xl:text-7xl
             mobile-s:text-lg 
             mobile-l:text-3xl 
             custom-md:text-6xl'>
             AI-Proof Your Bussiness with
           </h1>
           <h1 className='xl:text-7xl font-semibold
             mobile-s:text-2xl 
             mobile-l:text-3xl 
             custom-md:text-6xl'>
             <HighlightText text={"Cybermass.ai Solutions"} />
           </h1>
     
         <div className='flex justify-center items-center 
          xl:w-[550px] text-center mt-[25px] mb-[20px]'>
            <p className='xl:text-[22px] mobile-s:text-[16px] text-slate-400'>Secure Your Future with Cybermass.ai Protect, innovate, and thrive with our advanced AI solutions.</p>
         </div>
      </div>

      <Button 
         btn1="CONTACT US"
         btn2="AI Solutions"
         arrow1={<FaArrowRight/>} 
         arrow2={<FaArrowDown />} 
         link1={"/"} 
         link2={"/"}
      />

</div>


     {/* <div className='h-[150px]'></div> */}
  
      {/* <div className='flex bg-no-repeat'
        style={{ 
          backgroundImage: `url(${background1})`,  
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
      <TextWithImage 
        title={"Start Your AI Journey"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante at enim facilisis dignissim. Sed viverra, neque ut pulvinar elementum, velit nulla facilisis sem, vel laoreet metus ipsum acvelit."}
        boldpoint1={"Bold Points 1"}
        boldpoint2={"Bold Points 2"}
        image={img}
      />
      </div> */}


      {/* Background image with text overlay */}
      <div className="relative">
        <img
          src={earth}
          alt="Earth"
          className="w-full h-full object-cover shadow-[inset_-3px_20px_40px_20px_#02070d]"
        />
      </div>

      <div className='w-full xl:h-full mobile-s:h-auto'>
          <div className='flex justify-center items-center mb-[50px]'>
            <h1 className='xl:text-5xl mobile-s:text-3xl text-center font-Ubuntu font-semibold'>
              Elevate Your Business From Outdated
              <br />
              <HighlightText text={"to AI Adopters"} />
            </h1>
          </div>
        
          <div className='flex flex-wrap justify-center items-center gap-8 mt-[100px]'>
            {/* Card 1 */}
            <div className='flex justify-center items-center bg-[#50095d51] border border-[#7c34c9] shadow-[0px_5px_25px_5px_#421D6A] rounded-lg p-4 
                w-[90%] sm:w-[45%] lg:w-[300px] h-[250px]'>
              <div className='flex justify-center items-center flex-col text-center gap-3'>
                <span className='text-4xl'><IoEarthOutline /></span>
                <h2 className='text-[18px] font-bold'>Step 1: Discover</h2>
                <p>Explore automation and optimization possibilities for your business via analysis and audits.</p>
              </div>
            </div>
        
            {/* Card 2 */}
            <div className='flex justify-center items-center bg-[#50095d51] border border-[#7c34c9] shadow-[0px_5px_25px_5px_#421D6A] rounded-lg p-4 
                w-[90%] sm:w-[45%] lg:w-[300px] h-[250px]'>
              <div className='flex justify-center items-center flex-col text-center gap-3'>
                <span className='text-4xl'><RiExchangeDollarFill /></span>
                <h2 className='text-[18px] font-bold'>Step 2: Implement</h2>
                <p>Implement Insidr solutions to automate your work and processes, to increase output and save time.</p>
              </div>
            </div>
        
            {/* Card 3 */}
            <div className='flex justify-center items-center bg-[#50095d51] border border-[#7c34c9] shadow-[0px_5px_25px_5px_#421D6A] rounded-lg p-4 
                w-[90%] sm:w-[45%] lg:w-[300px] h-[250px]'>
              <div className='flex justify-center items-center flex-col text-center gap-3'>
                <span className='text-4xl'><FaUsers /></span>
                <h2 className='text-[18px] font-bold'>Step 3: Operate</h2>
                <p>Deploy, manage and optimize AI automations and solutions across your business.</p>
              </div>
            </div>
          </div>
        </div>
      

      {/* Benefits box  */}
      <div className='w-full xl:h-full mobile-s:h-auto bg-[#16002d] shadow-[0px_-20px_50px_50px_#16002d] mt-[100px] mobile-s:mb-[100px] xl:mb-0'>
         <div className='flex flex-col justify-center items-center'>
           {/* Heading  */}
           <div className='text-center mb-[50px]'>
             <p className='text-gray-400 mb-[20px]'>THE WHY</p>
             <h1 className='text-3xl sm:text-4xl text-center font-bold text-gray-200 font-Ubuntu'>
               Benefits of Implementing AI Solutions
             </h1>
           </div>
       
           <div className='flex flex-wrap justify-center gap-8'>
             {/* Card 1 */}
             <div className='flex justify-center items-center bg-[#50095d51] p-4 rounded-lg w-[90%] sm:w-[45%] lg:w-[250px] h-auto'>
               <div className='w-full h-full flex justify-center items-center flex-col'>
                 <div className='flex justify-center items-center flex-col'>
                   <span className='text-4xl'><CiSettings /></span>
                   <h2 className='text-lg font-semibold mb-2'>Reduce Cost</h2>
                 </div>
                 <p className='text-center text-gray-400'>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, provident?
                 </p>
               </div>
             </div>
       
             {/* Card 2 */}
             <div className='flex justify-center items-center bg-[#50095d51] p-4 rounded-lg w-[90%] sm:w-[45%] lg:w-[250px] h-auto'>
               <div className='w-full h-full flex justify-center items-center flex-col'>
                 <div className='flex justify-center items-center flex-col'>
                   <span className='text-4xl'><BsArrowRepeat /></span>
                   <h2 className='text-lg font-semibold mb-2'>Increase Velocity</h2>
                 </div>
                 <p className='text-center text-gray-400'>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, provident?
                 </p>
               </div>
             </div>
       
             {/* Card 3 */}
             <div className='flex justify-center items-center bg-[#50095d51] p-4 rounded-lg w-[90%] sm:w-[45%] lg:w-[250px] h-auto'>
               <div className='w-full h-full flex justify-center items-center flex-col'>
                 <div className='flex justify-center items-center flex-col'>
                   <span className='text-4xl'><IoMdSpeedometer /></span>
                   <h2 className='text-lg font-semibold mb-2'>Boost Efficiency</h2>
                 </div>
                 <p className='text-center text-gray-400'>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, provident?
                 </p>
               </div>
             </div>
       
             {/* Card 4 */}
             <div className='flex justify-center items-center bg-[#50095d51] p-4 rounded-lg w-[90%] sm:w-[45%] lg:w-[250px] h-auto'>
               <div className='w-full h-full flex justify-center items-center flex-col'>
                 <div className='flex justify-center items-center flex-col'>
                   <span className='text-4xl'><FaRegCheckCircle /></span>
                   <h2 className='text-lg font-semibold mb-2'>Better Quality</h2>
                 </div>
                 <p className='text-center text-gray-400'>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, provident?
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>


      {/* Text with image Founder*/}
      <TextWithImage 
          title={"A Word From The Founder"}
          description={"Welcome to cybermass.ai! I am Lasse Linnes, a seasoned entrepreneur who has ventured into the frontier of AI innovation. My journey began in the online marketing space, and for a long time now, I’ve been incorporating AI as a way to optimize business output and efficiency. At cybermass.ai, we provide effective AI-solutions to help you steer through the AI landscape."}
          boldpoint1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante at enim facilisis dignissim. Sed viverra, neque ut pulvinar elementum, velit nulla facilisis sem, vel laoreet metus ipsum acvelit."}
          boldpoint2={"Bold Points 2"}
          image={founder}
      />


      {/* Text with image Co-Founder*/}
      <TextWithImage 
          title={"A Word From Co-Founder"}
          description={"Welcome to cybermass.ai! I am Lasse Linnes, a seasoned entrepreneur who has ventured into the frontier of AI innovation. My journey began in the online marketing space, and for a long time now, I’ve been incorporating AI as a way to optimize business output and efficiency. At cybermass.ai, we provide effective AI-solutions to help you steer through the AI landscape."}
          boldpoint1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante at enim facilisis dignissim. Sed viverra, neque ut pulvinar elementum, velit nulla facilisis sem, vel laoreet metus ipsum acvelit."}
          boldpoint2={"Bold Points 2"}
          image={cofounder}
      />

        <div className='h-[200px]'></div>

        <div className='w-full h-full'>
          <FAQ />
        </div>

        <Footer />


    </div>
  )
}

export default AiSolutions
