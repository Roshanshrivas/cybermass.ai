import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btn1, btn2, arrow1, arrow2, link1, link2}) => {
  return (
    <div>
        {/* Buttons & Arrow  */}
      
      <div className='flex justify-center items-center xl:-mt-[60px] mobile-s:mt-[40px]'>

     <div className='flex justify-center items-center xl:gap-10 mobile-s:gap-4'>
      <Link to={link1}>
     <button className='bg-[#993efc] xl:py-3 xl:px-7 xl:text-[16px] rounded-lg font-semibold
      mobile-s:py-3 mobile-s:px-2 mobile-s:text-[14px]
       flex justify-center items-center gap-2 hover:bg-transparent hover:border-2 transition-all ease-in-out hover:scale-105
       '>
         {btn1} {arrow1}
      </button>
   </Link>

   <Link to={link2}>
     <button className='border xl:py-3 xl:px-7 rounded-lg 
     flex justify-center items-center gap-2 xl:text-[16px] 
     mobile-s:py-3 mobile-s:px-2 mobile-s:text-[14px] font-semibold
     hover:bg-[#993efc] hover:border-none transition-all ease-in-out hover:scale-105'>
          {btn2} {arrow2}
      </button>
   </Link>

</div>
  

</div>
    </div>
  )
}

export default Button
