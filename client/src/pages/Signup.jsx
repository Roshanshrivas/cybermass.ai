import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/stars.svg";
import logo from "../assets/logoo.png";
import { IoIosArrowBack } from 'react-icons/io';
import { setLoading, setSignupData } from '../Slice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Common/Loading';




const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const { firstName, lastName, email, password, confirmPassword } = formData;


  // Handle input fields, when some value changes
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


    // Email validation
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    // Password validation (at least 8 characters, 1 number, 1 special character)
    const isValidPassword = (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true)); // Set loading to true


    // Form validation
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      dispatch(setLoading(false));
      return;
    }

    if (!isValidPassword(password)) {
      toast.error("Password must be at least 8 characters long, contain at least one number, and one special character.");
      dispatch(setLoading(false));
      return;
    }


    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      dispatch(setLoading(false));
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, formData);
      const data = await res?.data;
      toast.success(data.message);
      dispatch(setSignupData(formData));
      
      navigate("/login");


    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })

    } catch (error) {
      toast.error("Signup failed. Please check your credentials.");
    } finally {
      dispatch(setLoading(false)); // Set loading to false after request finishes
    }
  };


  // If loading is true, show the Loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <div 
      className='text-black h-full w-full overflow-x-hidden flex justify-center items-center bg-[#140735]' 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className='lg:w-[40vw] bg-white h-auto rounded-lg p-5 shadow-2xl transform transition duration-500 m-4'>
        <div className='flex justify-end items-center text-sm'>
          <IoIosArrowBack /><Link to={"/"}>Back to</Link>
        </div>
        <div className='flex justify-center'>
          <img src={logo} alt="Logo" className='w-14' />
        </div>
       
        <form onSubmit={handleSignup} className='flex flex-col gap-4'>
          <h2 className='font-extrabold text-3xl text-gray-800 text-center mb-4'>Create an Account</h2>
             
        <div className='flex gap-2'>     
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className='text-sm font-semibold text-gray-700'>First Name</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-indigo-500 transition duration-200'
              required
              placeholder='First Name'
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className='text-sm font-semibold text-gray-700'>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-indigo-500 transition duration-200'
              required
              placeholder='Last Name'
            />
          </div>
        </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className='text-sm font-semibold text-gray-700'>Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-indigo-500 transition duration-200'
              required
              placeholder='example@gmail.com'
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className='text-sm font-semibold text-gray-700'>Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-indigo-500 transition duration-200'
              required
              placeholder='Password'
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className='text-sm font-semibold text-gray-700'>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-indigo-500 transition duration-200'
              required
              placeholder='Confirm Password'
            />
          </div>

          <div className='text-xs text-gray-600 text-center'>
            <span className='mr-1'>Or</span>
            <Link to="/login" className='text-[#993ef9] hover:underline'>Login with existing account?</Link>
          </div>

          <button 
            type='submit'
            className='px-3 py-2 mt-4 font-bold bg-[#993ef9] text-white rounded-md hover:bg-[#7723d1] transition duration-300'
            disabled={loading} // Disable button when loading
            >
            {loading ? "SignUp in..." : "SignUp"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Signup;
