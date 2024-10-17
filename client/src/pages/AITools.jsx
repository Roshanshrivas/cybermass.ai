import React, { useState } from 'react'
import Navbar from '../components/Common/Navbar'
import img1 from "../assets/stars.svg"
import HighlightText from '../components/Common/HighlightText'
import SearchBar from '../components/Common/SearchBar'
import HeadingText from '../components/Common/HeadingText'
import AiToolComponent from '../components/PageComponents/AITools/AiToolComponent'
import Footer from "../components/Common/Footer"
import FAQ from "../components/Common/FAQ"


const AITools = () => {

  const [searchQuery, setSearchQuery] = useState('');

  return (

    <div className='w-full h-full overflow-x-hidden bg-[#140735] text-white'>
        <Navbar />
        <div className='mobile-s:h-[200px] mobile-s:mt-[40px] lg:h-[250px] lg:mt-[65px] flex flex-col justify-center items-center bg-no-repeat'
           style={{ 
           backgroundImage: `url(${img1})`,  
           backgroundSize: 'contain', 
           backgroundPosition: 'center',
         }}
         >

         {/* Text Area  */}
            <div className='text-center flex justify-center items-center flex-col gap-8 font-Ubuntu'>
                <div className='mobile-s:text-2xl lg:text-6xl'>
                   <h1 className='mobile-s:text-4xl lg:text-6xl'>Find Trending</h1>
                   <div className='flex flex-row gap-2 mt-2'>
                    <HighlightText text={"Mind-Blowing"} />
                    <h1>AI Tools</h1>
                  </div>
                </div>
            </div>

            {/* searchbar */}
             <SearchBar onSearch={setSearchQuery}/>
         </div>

            {/* AI Tool Component  */}
             <AiToolComponent searchQuery={searchQuery}/>



            {/* FAQ Section */}
            <div className='w-full h-screen flex justify-center items-center'>
              <div className='w-full'>
                <FAQ />
              </div>
            </div>


         <div className=''>
             <Footer />
         </div>

    </div>
  )
}

export default AITools