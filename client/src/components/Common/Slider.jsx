import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { sliderImage } from '../../data/sliderData';

const CustomSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='bg-white w-full h-[450px] mt-3'>
      <Slider {...settings}>
        {sliderImage.map((image, index) => (
          <div key={index} className='relative w-full h-[500px] overflow-hidden'>
            <img src={image.src} className='w-full h-full' />
            <div className='absolute bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex flex-col justify-center items-center text-white p-4'>
              <h2 className='text-3xl font-bold mb-2'>{image.heading}</h2>
              <p className='text-lg'>{image.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
