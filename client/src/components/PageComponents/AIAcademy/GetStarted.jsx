import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GetStarted = ({ title, linkText, link }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center mt-[100px]">
        <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 w-[90%] md:w-[80%] h-auto md:h-[100px] mt-[50px] rounded-md flex flex-wrap md:flex-nowrap justify-around items-center p-4">
          <p className="text-lg md:text-2xl font-semibold text-center">{title}</p>

          <Link to={link} className="mt-4 md:mt-0">
            <button className="flex items-center gap-2 px-6 md:px-7 py-3 rounded-full text-white text-[14px] md:text-[16px] hover:scale-105 transition-all duration-100 ease-in-out bg-[#111]">
              {linkText}
              <FaArrowRight className="mt-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
