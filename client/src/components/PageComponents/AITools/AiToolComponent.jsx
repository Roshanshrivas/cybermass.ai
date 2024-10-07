import React, { useEffect, useState } from 'react'
import toolsData from "../../../data/AIToolsData"
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AiToolComponent = ({ searchQuery }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const [filteredData, setFilteredData] = useState(toolsData)
  
    useEffect(() => {
      setFilteredData(
        toolsData?.filter((tool) => 
          tool.title.toLowerCase().includes(searchQuery.toLowerCase()) 
        )
      );
      setCurrentPage(1);
    }, [searchQuery]);


  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(toolsData.length / recordsPerPage)
  const numbers = [...Array(nPage).keys()].map(x => x + 1)




  function prePage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage(id) {
      setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center font-Ubuntu'>
        
        {/* Tools Cards */}
        <div className='h-full max-w-[1000px]'>
            {
              records?.map((data, index) => {
                return (
                  <div 
                     key={index} 
                     className='relative flex flex-col lg:flex-row items-center justify-evenly p-4 gap-x-2 gap-y-4 border rounded-lg hover:bg-[#9a3efc16] transition-all mb-4'>
                     <span className='bg-[#fff] w-6 h-6 rounded-full text-black absolute top-2 left-14 text-[12px] flex justify-center items-center'
                      >{data?.id}</span>
                    <div className='flex flex-col lg:flex-row gap-x-4 items-center'>
                      {/* image  */}
                      <div className=''>
                          <img 
                            src={data?.image} 
                            alt={data?.title} 
                            className='mobile-s:w-[80px] mobile-s:h-[80px] lg:w-[150px] lg:h-[150px] object-cover mobile-s:mb-6' />
                      </div>

                      {/* text  */}
                      <div className='flex mobile-s:flex-col w-full mobile-s:w-[300px] lg:w-[500px] mobile-s:items-center lg:items-start'>
                        <h2 className='text-2xl font-bold'>{data?.title}</h2>
                        <p className='mobile-s:text-center lg:text-start lg:w-[450px] mobile-s:text-[14px] lg:text-[14px] text-[#b1b1b1]'>{data.description}</p>
                        <p className='text-[12px]'>{data?.tag}</p>
                      </div>
                    </div>

                    <div>
                      <div className='text-[12px] text-[#a047ff] mb-2 text-center'>
                        from $1 / month
                      </div>

                      <a 
                        href={data?.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <button className='py-3 px-6 bg-[#fff] rounded-lg text-[12px] text-black flex gap-2 items-center'>
                          <BsBoxArrowUpRight /> Visit tool
                        </button>
                      </a>
                    </div>
                    
                    
                  </div>
                )
              })
            }


        {/* Pagination */}
       
        <div className='w-full flex flex-wrap justify-center items-center mt-8'>
          <button 
            onClick={prePage} 
            disabled={currentPage === 1}
            className='lg:px-4 lg:py-2 border mobile-s:mb-2 lg:mb-0 rounded-lg mx-1 text-sm mobile-s:px-2 mobile-s:py-1'>
            Prev
          </button>
          {
            numbers?.map((n, i) => (
              <button 
                key={i}
                className={`lg:px-4 lg:py-2 mobile-s:mb-2 lg:mb-0 border rounded-lg mx-1 text-sm mobile-s:px-2 mobile-s:py-1 ${currentPage === n ? 'bg-[#993efc]' : ''}`}
                onClick={() => changeCurrentPage(n)}>
                {n}
              </button>
            ))
          }
          <button 
            onClick={nextPage} 
            disabled={currentPage === nPage}
            className='lg:px-4 lg:py-2 border mobile-s:mb-2 lg:mb-0 rounded-lg mx-1 text-sm mobile-s:px-2 mobile-s:py-1'>
            Next
          </button>
        </div>

        </div>
    </div>
  )
}

export default AiToolComponent
