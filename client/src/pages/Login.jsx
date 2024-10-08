import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from "../assets/logoo.png";
import backgroundImage from "../assets/stars.svg"
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setToken, setUser } from '../Slice/AuthSlice';
import Loading from "../components/Common/Loading"



const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "", 
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
     }))
   }


  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true)); // Set loading to true


    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, formData, { withCredentials: true });
      const data = await res?.data;
      toast.success(data.message);

      // Dispatch token and user data to Redux store
      dispatch(setToken(data.token));
      dispatch(setUser(data.user)); // Assuming user data is part of the response

      // Save token in local storage or state if needed
      localStorage.setItem("token", JSON.stringify(data?.token));
     
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      dispatch(setLoading(false)); // Set loading to false after request finishes
    }
  }

  // If loading is true, show the Loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <div className='text-black h-screen w-screen flex justify-center items-center bg-[#140735]'
    style={{ 
      backgroundImage: `url(${backgroundImage})`,  
      backgroundSize: 'contain', 
      backgroundPosition: 'center',
    }}
    >
      <div className='lg:w-[30vw] bg-white h-auto rounded-lg p-5 shadow-2xl transform transition duration-500'>
        <div className='flex justify-center'>
          <img src={logo} alt="Logo" className='w-20' />
        </div>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <h2 className='font-extrabold text-3xl text-gray-800 text-center mb-4'>Welcome Back</h2>

          <div className='flex flex-col'>
            <label htmlFor="email" className='text-sm font-semibold text-gray-700'>Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={handleOnChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-[#993ef9] transition duration-200'
              required
              placeholder='Example@gmail.com'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password" className='text-sm font-semibold text-gray-700'>Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={handleOnChange}
              className='w-full border border-gray-300 rounded-md p-2 outline-none focus:border-[#993ef9] transition duration-200'
              required
              placeholder='Password'
            />
          </div>

          <Link to="/forgot-password" className='text-xs text-[#993ef9] hover:underline self-end'>Forgot Password?</Link>

          <button 
            type='submit'
            className='w-full py-3 mt-4 bg-[#993ef9] text-white font-bold rounded-md hover:bg-[#7723d1] transition duration-300'
            disabled={loading} // Disable button when loading
            >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className='text-center mt-4 text-sm text-gray-600'>
            <span className='mr-1'>Don't have an account? </span>
            <Link to="/signup" className='text-[#993ef9] hover:underline'>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
