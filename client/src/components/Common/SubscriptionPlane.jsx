import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPlans, setUserId, setSubscriptionId, setSubscriptionStatus } from "../../Slice/SubscriptionSlices";
import { IoCloudDoneOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';


const SubscriptionPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get user from Redux store
    const user = useSelector((state) => state.auth?.user);
    const token = useSelector((state) => state.auth?.token)
    
    const userId = user ? user._id : null;

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
        setSelectedPlans(plan);
        dispatch(setSelectedPlan(plan)); // Store the selected plan in Redux
        dispatch(setSelectedPlans(plan)); // Store the selected plan in Redux
    };

    const handlePayment = async () => {
        if (!selectedPlan) {
            alert("Please select a subscription plan");
            return;
        }

        if (!userId) {
          alert("User not logged in");
          return navigate("/login");
         }

         dispatch(setUserId(userId)); // Store userId in Redux


        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/subscription`, {
                userId,
                subscriptionPlan: selectedPlan
            }, 
            {
                headers: {
                    Authorization: `Bearer ${token}` // Ensure token is set correctly
                }
            }
        );

            const { order, subscriptionId } = response.data;


            // Store subscriptionId in Redux
            dispatch(setSubscriptionId(subscriptionId));


            const options = {
                key: "rzp_test_oewToxc9Ah56p4",
                amount: order.amount,
                currency: order.currency,
                name: 'Cybermass.ai',
                description: `Subscription Plan: ${selectedPlan}`,
                order_id: order.id,
                handler: async (response) => {
                    await verifyPayment(response);
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            alert("Payment initiation failed. Please try again.");
        }
    };


    //============================================================================ 
    //------------------------------- verifyPayment ------------------------------
    //============================================================================ 
    

    const verifyPayment = async (paymentResponse) => {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentResponse;

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/verify-payment`, {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                subscriptionPlan: selectedPlan,
                userId,
            });            

            if (response?.data?.success) {
                const { subscriptionId } = response?.data; // Get subscriptionId from response

                // Store subscriptionId in Redux
                dispatch(setSubscriptionId(subscriptionId));
                dispatch(setSubscriptionStatus('active')); // Update subscription status in Redux
                alert("Payment successful! Your subscription is now active.");
                navigate("/aitools");
                // <Navigate to="/aitools" />

            } else {
                alert("Payment verification failed. Please contact support.");
            }
        } catch (error) {
            alert("Payment verification failed. Please try again.");
        }
    };

    return (
        <div className="container mx-auto mobile-s:p-2 xl:p-6 font- mt-[150px]">
            <h2 className="xl:text-4xl mobile-s:text-3xl font-bold text-center mb-4 text-white">
                Choose Your Plan
            </h2>
            <p className="text-center text-lg text-white mb-12">
                Select a plan that best suits your needs and get access to all AI tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Monthly plan card */}
                <div 
                    onClick={() => handlePlanSelection('monthly')} 
                    className={`p-8 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${selectedPlan === 'monthly' ? 'border-[#C276F0] bg-gradient-to-b from-[#C276F0] to-[#993ef9] shadow-xl' : 'border-[#993ef9]'} text-white`}
                >
                    <h3 className="text-3xl font-bold mb-4">1 Month Plan</h3>
                    <p className="text-2xl mb-4 font-semibold text-white">₹100</p>
                    <p>Perfect for trying out our AI tools.</p>
                    <ul className="mt-6 space-y-3">
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> Access to all AI tools</li>
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> Monthly billing</li>
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> Cancel anytime</li>
                    </ul>
                </div>

                {/* Semi-Annual Plan Card - Most Popular */}
                <div 
                    onClick={() => handlePlanSelection('semiannual')} 
                    className={`p-8 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${selectedPlan === 'semiannual' ? 'border-[#C276F0] bg-gradient-to-b from-[#C276F0] to-[#993ef9] shadow-xl' : 'border-[#993ef9]'} text-white relative`}
                >
                    <div className="absolute top-0 right-0 bg-[#421D6A] text-white text-xs font-semibold px-2 py-1 rounded-bl-md">Most Popular</div>
                    <h3 className="text-3xl font-bold mb-4">6 Months Plan</h3>
                    <p className="text-2xl font-semibold mb-4">₹500</p>
                    <p>Best for regular users.</p>
                    <ul className="mt-6 space-y-3">
                    <li className='flex items-center gap-2'><IoCloudDoneOutline/> Save more with semi-annual billing</li>
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> Priority support</li>
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> Access to premium features</li>
                    </ul>
                </div>

                {/* Annual Plan Card */}
                <div 
                    onClick={() => handlePlanSelection('annual')} 
                    className={`p-8 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${selectedPlan === 'annual' ? 'border-[#C276F0] bg-gradient-to-b from-[#C276F0] to-[#993ef9] shadow-xl' : 'border-[#993ef9]'} text-white`}
                >
                    <h3 className="text-3xl font-bold mb-4">1 Year Plan</h3>
                    <p className="text-2xl font-semibold mb-4">₹900</p>
                    <p>Ideal for power users.</p>
                    <ul className="mt-6 space-y-3">
                    <li className='flex items-center gap-2'><IoCloudDoneOutline/> Best value with annual billing</li>
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> All premium features</li>
                        <li className='flex items-center gap-2'><IoCloudDoneOutline/> Exclusive offers and updates</li>
                    </ul>
                </div>
            </div>

            {/* Button  */}

            <div className="text-center mt-12">
                {
                    (!user || user?.subscription === null) ? 
                    <button 
                    onClick={handlePayment} 
                    className="bg-[#421D6A] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#993efc] transition"
                >
                    Pay Now
                </button>
                :
                <div className="text-white text-lg font-semibold flex justify-center items-center">
                    <Link to={"/aitools"} 
                    className='gap-2 flex justify-center items-center hover:text-[#993efc]'>
                      <p>Your subscription is active. Click here to access your AI tools</p>
                      <FaExternalLinkAlt className='text-[#993efc]'/>
                    </Link>
                </div> 
                }

                
            </div>
        </div>
    );
};

export default SubscriptionPlans;
