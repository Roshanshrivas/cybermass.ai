import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../../data/BlogData';
import Navbar from '../../Common/Navbar';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../../Common/Footer"

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = BlogData.find(post => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className="w-full h-screen overflow-x-hidden bg-[#140735] text-white">
    <Navbar />

     <div className='lg:p-8 mobile-s:p-4 lg:mt-[50px]'>
        <div className="lg:text-6xl font-bold mb-4">
            {blogPost.title}
        </div>

        <div className="text-sm text-gray-500 mb-4">By {blogPost.author} on {blogPost.date}</div>

       {/* <div className='mb-2'>
          <p className='text-gray-500'>
             {blogPost.summary}
         </p> 
       </div> */}

        
        <div className='flex gap-4 text-lg'>
            <Link to={"/"}><span><FaFacebook /></span></Link>
            <Link to={"/"}><span><FaInstagram /></span></Link>
            <Link to={"/"}><span><FaLinkedin /></span></Link>
        </div>

        {blogPost.image && (
        <img 
          src={blogPost.image} 
          alt={blogPost.title} 
          className="lg:w-full lg:h-[500px] object-cover rounded-lg mt-[20px]"
        />
        )}

        <div className='text-3xl text-white mt-[50px] mb-6'>
            {blogPost.heading1} 
        </div>

      <div className="text-[18px] text-gray-400 mb-8">
        {blogPost.content}
       </div>

       <div className='text-[18px] text-gray-400'>
        {blogPost.content2}
       </div>

    </div>

    <div className='h-[150px]'></div>

    <Footer />

    </div>
  );
};

export default BlogDetail;
