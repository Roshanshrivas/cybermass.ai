import React, { useEffect, useState } from 'react'
import toolsData from "../../../data/AIToolsData"
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const AiToolComponent = ({ searchQuery }) => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const [filteredData, setFilteredData] = useState([]);
  

  const categoriesData = {
    "Programming": ["code generation", "tutor", "consultant"],
    "Marketing": ["seo", "blog & content", "social media marketing", "email marketing", "market research", "branding", "sales"],
    "Academic": ["language", "Study & Exam Prep", "academic essay"],
    "Job Hunting": ["ai career counselor", "cover letter", "Interview", "resume"],
    "Game": ["simulation", "adventure", "romantic"],
    "Creative": ["story", "art", "book", "midjourney", "creative"],
    "Prompt Engineering": ["prompt generator", "advance techniques", "prompt optimizer"],
    "Business": ["Finance", "Startup", "Legal", "UI/UX", "HR", "Product Management"],
    "Productivity": ["Brainstorming", "Personal Growth", "Mental Health"],
    "Jailbreaks": ["jailbreak"],
  };


  // Reset filters and show all tools
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setFilteredData(toolsData);
    setCurrentPage(1);
  };


  useEffect(() => {
    let filtered = toolsData?.filter(tool =>
      tool?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    if (selectedCategory) {
      filtered = filtered?.filter(tool => tool?.category?.toLowerCase() === selectedCategory?.toLowerCase());
    }


    if (selectedSubcategory) {
      filtered = filtered?.filter(tool => tool?.subcategory?.toLowerCase() === selectedSubcategory?.toLowerCase());
    }

    setFilteredData(filtered);
    setCurrentPage(1); // reset to page 1 whenever filters change
  }, [searchQuery, selectedCategory, selectedSubcategory]);


  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filteredData.length / recordsPerPage)
  const numbers = [...Array(nPage).keys()].map(x => x + 1)


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory(''); // Reset subcategory when changing category
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };


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
    <div className='w-full h-full flex flex-col justify-center items-center font-Ubuntu'>
        
        {/* Dropdown Filters */}
      <div className="filter-section w-full flex justify-center items-center lg:gap-4 mobile-s:gap-2 mobile-s:mb-[50px] p-2 text-black flex-wrap lg:mb-[25px]">
        <select onChange={handleCategoryChange} value={selectedCategory} className="lg:px-2 lg:py-2 mobile-s:px-1 mobile-s:py-2 mobile-s:w-[130px] mobile-s:text-[14px] border rounded-lg">
          <option value="">Select Category</option>
          {Object.keys(categoriesData)?.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        {selectedCategory && (
          <select onChange={handleSubcategoryChange} value={selectedSubcategory} className="lg:px-4 lg:py-2 mobile-s:px-1 mobile-s:py-2 mobile-s:w-[150px] mobile-s:text-[14px] border rounded-lg">
            <option value="">Select Subcategory</option>
            {categoriesData[selectedCategory]?.map((subcategory, index) => (
              <option key={index} value={subcategory}>{subcategory}</option>
            ))}
          </select>
        )}

        {/* Button to reset filters */}
        <button onClick={resetFilters} className="lg:px-4 lg:py-2 lg:w-[150px] mobile-s:px-1 mobile-s:py-2 mobile-s:w-[290px] mobile-s:text-[14px] bg-[#993efc] text-white rounded-lg">
          Show All Tools
        </button>

      </div>


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
        {filteredData?.length > recordsPerPage && (
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
          )}
        </div>
    </div>
  );
};

export default AiToolComponent;
