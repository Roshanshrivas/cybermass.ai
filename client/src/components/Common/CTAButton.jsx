import React from 'react'
import { Link } from 'react-router-dom'


const CTAButton = ({children, active, linkto}) => {
    return (
        <Link to={linkto}>
    
            <div className=
            {`text-center 
                xl:text-[18px] xl:px-10 xl:py-5 rounded-md font-bold
                sm:text-[16px]
                mobile-s:text-[14px] mobile-s:px-5 mobile-s:py-3
                custom-md:text-[17px] custom-md:px-8 custom-md:py-4
                ${active ? "bg-gradient-to-b from-[#6b0ba7] to-[#993ef9] text-white" : ""}
                  hover:scale-95 transition-all duration-200
                  hover:shadow-none shadow-[0px_5px_25px_5px_#421D6A]`}>
                {children}
            </div>
    
        </Link>
      )
}

export default CTAButton
