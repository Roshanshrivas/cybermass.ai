import React from 'react'
import SubscriptionPlans from '../components/Common/SubscriptionPlane'
import  Navbar from "../components/Common/Navbar"
import  Footer from "../components/Common/Footer"

const SubscriptionPlan = () => {
  return (
    <div className='w-full h-[100vh] overflow-x-hidden bg-[#140735] text-white'>
      <Navbar />
        <div>
            <SubscriptionPlans />
        </div>

        <div className='flex justify-center items-center mb-[100px] mt-2'>
            <p className='text-red-600'>* You Have No Active Plan Please Buy a Plan and use All AITools for Free*</p>
        </div>

        <Footer />

    </div>
  )
}

export default SubscriptionPlan
