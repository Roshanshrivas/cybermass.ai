import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };


  return (
    <form className='w-full sm:w-[350px] md:w-[400px] lg:w-[500px] relative mt-8 sm:mt-4 hover:border rounded-full 
        p-2 hover:border-[#993efc] transition-all ease-in-out 
        hover:shadow-[0px_5px_100px_0px_#993efc] border border-[#555]'>
        <div className="relative">
            <input 
            type="search" 
            placeholder='Type Here.....'
            value={query}
            onChange={handleInputChange}
            className='w-full pl-6 font-semibold p-4 rounded-full focus:outline-none text-black'
            />

            <button 
            type='submit'
            className='absolute right-1 top-1/2 -translate-y-1/2
            p-4 bg-slate-900 rounded-full'>
                <AiOutlineSearch />
            </button>

        </div>
        {/* <div className='absolute top-20 p-4 bg-slate-800 text-white w-full
         rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>

        </div> */}

    </form>
  )
}

export default SearchBar
