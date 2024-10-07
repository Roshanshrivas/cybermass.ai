import React, { useState } from "react";
import HighlightText from "./HighlightText";
import { featuredToolsData } from "../../data/FeaturedAITools";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const FeaturedTools = () => {

  const [isFree, setIsFree] = useState("");
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleTryNow = () => {

    if (!token) {
      // User is not logged in
      toast.error("You need to log in or sign up first!");
    } else if (user && user.subscription) {
      // User is logged in and has an active subscription
      toast.success("User is now active Plan");
      navigate("/aitools");
    } else {
      // User is logged in but doesn't have an active subscription
      navigate("/subscription-plans");

    }
  };

  return (
    <div className="flex justify-center items-center xl:mt-[200px] mobile-s:mt-[120px]">
      <div>
        <div className="xl:text-6xl text-center mb-10
          mobile-s:text-3xl mobile-l:text-4xl">
          <h1 className="xl:mb-4">Grow Fast with These</h1>
          <h2>
            <HighlightText text={"Featured"} /> AI Tools
          </h2>
        </div>

        <div className="rounded-lg flex flex-wrap justify-center gap-10 w-full p-5">
          {featuredToolsData.map((element, index) => {
            return (
              <div key={index} className="xl:w-[350px] h-auto rounded-lg shadow-lg
              bg-[#3a12654f] border border-[#bd91ed76] hover:shadow-[0px_5px_25px_5px_#421D6A] 
              transition-all duration-200 hover:scale-105
              mobile-s:w-[250px] 
              ">
                {/* image */}
                <div>
                  <img src={element.image} alt={element.title} 
                  className="w-full xl:h-[200px] rounded-t-lg" />
                </div>
                {/* Button  */}
                <div className="mt-5 flex justify-end mr-3">
                  <span className="xl:px-6 xl:py-2 bg-[#541993cd] rounded-full
                     mobile-s:px-4 mobile-s:py-1">
                    { isFree ? "Free" : "Paid"}
                  </span>
                </div>
                {/* textArea  */}
                <div className="p-4">
                  <div className="mb-4">
                    <h1 className="xl:text-3xl font-semibold
                      mobile-s:text-xl custom-md:text-2xl">{element.title}</h1>
                    <p className="text-[#999]">{element.tag}</p>
                  </div>

                  <div>
                    <p className="text-[#888] mobile-s:text-xs xl:text-[18px] xl:leading-6">{element.description}</p>
                  </div>
                </div>
                
                {/* tryNow  */}
                <div className="flex justify-center">
                        <button 
                        onClick={handleTryNow}
                        className="w-[90%] xl:h-[50px] xl:text-[20px]
                        mobile-s:text-[16px] mobile-s:h-[40px]
                        text-white rounded-full mb-4 border border-[#867e7e68]
                        bg-[#993cef]">
                            Try Now
                        </button>
                            
                </div>
              </div>
            );
          })}
        </div>
      </div>

     <div>
      
     </div>

    </div>

  );
};

export default FeaturedTools;
