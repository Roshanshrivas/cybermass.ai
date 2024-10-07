import React from 'react';
import HighlightText from '../../Common/HighlightText';

const TextWithImage = ({ title, description, boldpoint1, boldpoint2, image}) => {
  return (
    <div className="w-full overflow-x-hidden px-4 md:px-8 lg:px-16">
      <div className="mt-[50px] md:mt-[100px] flex flex-col-reverse md:flex-row gap-6 justify-center mx-auto">
        
        {/* Image Area */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[200px] h-auto md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-auto">
            {/* Placeholder for Image */}
            <img
              src={image}
              alt="AI Journey"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        
        
        {/* Text Area */}
        <div className="w-full md:w-1/2">
          <div className="text-center md:text-left lg:mt-[150px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
              <HighlightText text={title}/>
            </h2>
            <p className="text-base md:text-lg mt-4">
              {description}
            </p>
            <p className='mt-4'>{boldpoint1}</p>
            <p className='mt-4'>{boldpoint2}</p>
            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default TextWithImage;
