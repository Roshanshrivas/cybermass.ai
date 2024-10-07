import React from 'react'
import BlogData from "../../../data/BlogData"
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const BlogPost = ({heading}) => {

  const navigate = useNavigate();

    return (
        <div className="mobile-s:p-3 xl:p-8 mt-[150px]">
          <div className="mobile-s:text-2xl custom-md:text-3xl xl:text-4xl font-bold text-center mb-8">{heading}</div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogData.map((data, index) => (
              <div 
                key={index} 
                className="bg-[#160119] mobile-s:p-4 xl:p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                {/* Image */}
                {data.image && (
                  <img 
                    src={data.image} 
                    alt={data.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
    
                {/* Title */}
                <div className="text-xl font-semibold mb-2">{data.title}</div>
    
                {/* Author and Date */}
                <div className="text-sm text-gray-500 mb-4">By {data.author} on {data.date}</div>
    
                {/* Summary */}
                <div className="text-gray-400 mb-4">{data.summary}</div>
    
                {/* Read More Button */}
                <button 
                  className="text-[#993efc] font-semibold hover:text-[#7b1ae3] transition duration-300"
                  onClick={() => navigate(`/blog/${data.id}`)}
                >
                  Read More..
                </button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default BlogPost