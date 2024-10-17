import React from 'react'
import HighlightText from './HighlightText';
import { CiBoxList } from 'react-icons/ci';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';
import { PiChartLineUpBold } from 'react-icons/pi';
import { FaChartBar, FaCode, FaHashtag } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { BsShop } from 'react-icons/bs';
import { FaSackDollar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';


const categoriesItems = [
    {
      icon: <FaSackDollar/>,
      title: "Finance"
    },
    {
      icon: <FaCode />,
      title: "Development"
    },
    {
      icon: <BsShop />,
      title: "E-Commerce"
    },
    {
      icon: <FaChartBar />,
      title: "Productivity"
    },
    {
      icon: <HiSpeakerphone />,
      title: "Marketing"
    },
    {
      icon: <FaHashtag />,
      title: "Social Media"
    },
    {
      icon: <PiChartLineUpBold />,
      title: "Sales"
    },
    {
      icon: <IoChatboxEllipsesSharp />,
      title: "Support"
    },
    {
      icon: <CiBoxList />,
      title: "Others"
    },
  
  ]


const CategoriesItem = () => {

  const { token, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();


    const handleBtn = () => {
     
      if (!token) {
        // User is not logged in
        toast.error("You need to log in or sign up first!");
      } else if (user && user?.subscription) {
        // User is logged in and has an active subscription
        toast.success("User is now active Plan");
        navigate("/aitools");
      } else {
        // User is logged in but doesn't have an active subscription
        navigate("/subscription-plans");
      }
    };

  return (
    <div className="h-full w-screen overflow-x-hidden">
    <div className="h-[90px]"></div>
    {/* Text  */}
    <div className="xl:text-6xl font-Ubuntu flex flex-col justify-center items-center
       mobile-s:text-4xl mobile-l:text-5xl xl:gap-3
    ">
      <h1 className="flex gap-4">Find Ai Tools For</h1>
      <h1 className="flex gap-4">
        Your
        <HighlightText text={"Needs"} />
      </h1>
    </div>

    {/* categories box  */}

    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex flex-wrap gap-5 justify-center items-center mx-auto">
        {categoriesItems.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() => handleBtn()}
              className="cursor-pointer flex justify-start items-center xl:gap-x-4
                   bg-[#3a1265b7] xl:text-[24px] font-semibold rounded-md
                   border border-[#7c34c9] xl:w-[350px] xl:h-[80px] xl:pl-6
                   hover:bg-[#421D6A] hover:shadow-[0px_5px_25px_5px_#421D6A]
                   mobile-s:text-[14px] mobile-s:w-[140px] mobile-s:pl-3 mobile-s:gap-x-1 mobile-s:h-[60px]
                   ">
              <span className="text-[#C276F0] xl:text-3xl mobile-s:text-2xl">
                {element.icon}
              </span>
              {element.title}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default CategoriesItem