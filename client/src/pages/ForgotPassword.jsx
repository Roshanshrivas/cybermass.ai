import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleForgot = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/forgot`, {
            email,
        });
        const data = await res?.data;
        toast.success(data.message);
        navigate("/verify");
    }


    return (
        <div className='text-black h-screen w-screen flex justify-center items-center bg-[#140735]'>
            <form 
              onSubmit={handleForgot}
              className='bg-white shadow-md w-[80vw] md:w-[30vw] rounded-md p-3 flex flex-col gap-2'>
                 <h2 className='font-bold text-xl text-gray-800'>Login</h2>
    
                 <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full border border-gray-300 rounded-md p-1 outline-none'
                        />
                 </div>
                  
                 <div className='text-xs text-gray-600 '>
                   <span className='mr-1'>Or</span>
                   <Link to="/login" className='cursor-pointer hover:underline'>
                      Login with existing account
                   </Link>
                 </div>
                 <button 
                    type='submit'
                    className='px-3 py-2 font-bold bg-purple-500 text-white rounded-md'>
                     Send Otp
                  </button>
    
            </form>
        </div>
      )
    
}

export default ForgotPassword