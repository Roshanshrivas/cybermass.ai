import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ContactForm = () => {

  const {token, user} = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    message: ''
  });


  const {name, email, phoneNo, message} = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //check if the user is logged in
    if(!token || !user?._id) {
        toast.error("You need to be logged in to submit the form.");
        return;
    }


     // Include the userId in the form data
     const formWithUserId = {
        ...formData,
        userId: user._id,
      };


    // Handle form submission logic here
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, formWithUserId, {
            headers: {
                Authorization: `Bearer ${token}`, // Send the token in the request headers
              }
        });
        
        const data = await res?.data;
        toast.success(data.message);
        // setFormData(formData);

        //reset form
        setFormData({
            name: '',
            email: '',
            phoneNo: '',
            message: ''
        })


    } catch (error) {
        // Handle specific errors
        if (error?.response && error?.response?.data?.message) {
            toast.error(error.response.data.message);
        }else {
            toast.error("Contact Us Failed", error.message);
        }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 -mt-[50px]">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 rounded-2xl shadow-lg bg-[#111]">

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-white">Full Name</label>
          <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className=" text-white bg-[#1A1D1F] w-full px-4 py-2 border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#993efc]"
              required
            />
        </div>


        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-white">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#1A1D1F] text-white px-4 py-2 border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#993efc]"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-white">Phone Number</label>
          <input 
            type="text" 
            name="phoneNo" 
            value={formData.phoneNo}
            onChange={handleChange}
            className="w-full px-4 bg-[#1A1D1F] text-white py-2 border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#993efc]"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 bg-[#1A1D1F] text-white py-2 border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#993efc]"
            required
          ></textarea>
        </div>
        <div className="mt-6">
          <button 
            type="submit" 
            className="w-full bg-[#993efc] text-white px-6 py-3 rounded-lg hover:bg-[#7323c9] focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
