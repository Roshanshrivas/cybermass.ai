import React, { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase.",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order through the tracking link provided in the email.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via phone, email, and chat.",
    },
    {
      question: "Cybermass.ai supports",
      answer: "Yes, we offer 24/7 customer support via phone, email, and chat.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full border-b flex justify-between items-center p-4 sm:p-5 rounded-lg focus:outline-none"
            >
              <span className="text-base sm:text-lg md:text-xl font-medium">
                {item.question}
              </span>
              <span className="text-2xl sm:text-3xl">
                {openIndex === index ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
              </span>
            </button>
            {openIndex === index && (
              <div className="bg-[#222] p-4 sm:p-5 rounded-lg">
                <p className="text-sm sm:text-base text-gray-400">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
