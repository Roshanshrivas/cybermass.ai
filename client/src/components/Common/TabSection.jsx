import React, { useState } from "react";
import HighlightText from "./HighlightText";
import TabImage from "../../assets/AI.png";
import ai from "../../assets/aigif.gif";

const tabData = [
  {
    title: "AI Tools",
    content: "Find The Best AI Tools to",
    content2: "Supercharge Your Business",
    description:
      "Find and compare the 300+ Best AI Tools in 21+ categories. We constantly search the market and update the list to keep a collection of the most valuable tools that will empower your business, and cut the rest that you don't really need.",
    image: TabImage,
  },
  {
    title: "AI Solutions",
    content: "AI-Proof Your Business with",
    content2: "Cybermass.ai Solutions",
    description:
      "At cybermass.ai, we create practical AI solutions to empower businesses to evolve in the AI landscape. Discover systems and solutions that will boost efficiency, reduce cost, and future-proof your operations.",
    image: ai,
  },
  {
    title: "AI Academy",
    content: "Your AI ",
    content2: "Journey Starts Here",
    description:
      "Learn the ins and outs of AI with our collection of guides; how to use AI to optimize your business, work productivity, and daily life.",
    image: TabImage,
  },
];

const Tabs = ({ tabs, color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap mt-[200px] justify-center items-center">
        <div className="xl:w-[85%] mobile-s:w-[95%] mobile-l:w-[90%] custom-md:w-[80%] lg:w-[80%]">
          <ul className="flex xl:mb-11 list-none flex-wrap pt-3 pb-4 flex-row justify-center" role="tablist">
            {tabs.map((tab, index) => (
              <li key={index} className="flex-auto text-center border border-[#7c34c9] rounded-md mx-2 mb-4">
                <a
                  className={
                    "xl:text-[18px] mobile-s:text-[12px] mobile-l:text-[13px] font-bold uppercase px-8 py-4 shadow-lg rounded block leading-normal" +
                    (openTab === index + 1
                      ? "text-white bg-[#7e1bbb]"
                      : "text-[#C276F0]")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href={`#link${index + 1}`}
                  role="tablist"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="xl:px-4 xl:py-5 flex-auto mobile-s:px-2">
              <div className="tab-content tab-space">
                {tabs.map((tab, index) => (
                  <div key={index} className={openTab === index + 1 ? "block" : "hidden"} id={`link${index + 1}`}>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                      <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4 lg:mb-0">
                        <h1 className="text-white text-2xl mobile-s:text-xl mobile-l:text-3xl lg:text-4xl font-bold mt-5">
                          {tab.content}
                        </h1>
                        <span className="text-2xl mobile-s:text-xl lg:text-4xl">
                          <HighlightText text={tab.content2} />
                        </span>
                        <p className="mt-7 w-full lg:w-[450px] text-[#999] text-sm lg:text-base">
                          {tab.description}
                        </p>
                      </div>
                      {tab.image && (
                        <div className="w-full lg:w-1/2">
                          <img
                            src={tab.image}
                            alt={tab.title}
                            className="w-full h-auto lg:h-[250px] shadow-[0px_5px_25px_5px_#421D6A] object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return <Tabs tabs={tabData} color="#C276F0" />;
}
