import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const VerifyOtp = () => {

    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/verify-otp`, 
            {otp, password})
        const data = await res?.data;
        toast.success(data.message);
        navigate("/login");
        
    }
  
    return (
        <div className='text-black h-screen w-screen flex justify-center items-center bg-[#140735]'>
            <form 
              onSubmit={handleVerify}
              className='bg-white shadow-md w-[80vw] md:w-[30vw] rounded-md p-3 flex flex-col gap-2'>
                 <h2 className='font-bold text-xl text-gray-800'>Verification</h2>
    
                 <div>
                    <label htmlFor="otp">OTP</label>
                    <input 
                        type="text" 
                        name="otp" 
                        id="otp" 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className='w-full border border-gray-300 rounded-md p-1 outline-none'
                        />
                 </div>
                 
                 <div>
                  <label htmlFor="password">New Password</label>
                   <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border border-gray-300 rounded-md p-1 outline-none'
                     />
                 </div>

                 <button 
                    type='submit'
                    className='px-3 py-2 font-bold bg-purple-500 text-white rounded-md'>
                     verify otp
                  </button>
    
            </form>
        </div>
      )
}

export default VerifyOtp
