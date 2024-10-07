import React from 'react'
import HighlightText from "../Common/HighlightText";
import "../../App.css"
import CTAButton from './CTAButton';
import { FaArrowDown } from "react-icons/fa";


const HeadingText = ({heading1, highlighttext1, heading2, heading3, highlighttext2, desc1, backgroundImage}) => {
  return (
    <div 
    className='flex flex-col justify-center items-center xl:h-[500px] 
    mobile-s:h-[250px] mobile-l:h-[350px] custom-md:h-[400px] bg-no-repeat'
    style={{ 
      backgroundImage: `url(${backgroundImage})`,  
      backgroundSize: 'contain', 
      backgroundPosition: 'center',
    }}
    >

     {/* Heading Text  */}
      <div className='xl:text-7xl font-Ubuntu flex flex-col justify-center items-center
        mobile-s:text-4xl 
        mobile-l:text-5xl 
        custom-md:text-6xl'>
        
        <h1 className='flex xl:gap-4 mobile-s:gap-2'>{heading1} 
            <HighlightText text={highlighttext1} />
            <p>{heading2}</p>
        </h1>
        <div className='xl:h-[10px] mobile-s:h-[5px]'></div>

        <h1 className='xl:text-7xl flex xl:gap-4
         mobile-s:text-4xl mobile-s:gap-2 
         mobile-l:text-5xl 
         custom-md:text-6xl
        '>{heading3} 
            <HighlightText text={highlighttext2} />
        </h1>
      </div>

      <div className='xl:mt-9 flex justify-center items-center
        mobile-s:mt-6'>
        <p className='xl:text-[22px] xl:w-[60%] text-center text-slate-400
           mobile-s:text-[14px] mobile-s:w-[90%]
           mobile-l:text-[18px]
           custom-md:text-[20px] custom-md:w-[75%]
         '>
          {desc1}</p>
      </div>

      {/* <div className='text-[30px] mt-[50px]'>
        <FaArrowDown />
      </div>

      <div className='flex mt-10 gap-x-5'>
         <CTAButton active={true} linkto={"/"}>Ai Tool List</CTAButton>
         <CTAButton active={false} linkto={"/"}>Academy</CTAButton>
      </div> */}

    </div>

      
  )
}

export default HeadingText
