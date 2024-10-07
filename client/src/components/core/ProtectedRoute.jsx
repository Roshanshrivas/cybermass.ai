import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from "../Common/Loading"

const ProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth); // Get token and user info from Redux
  const [userInfo, setUserInfo] = useState(null); // Store user info in local state
  const [loading, setLoading] = useState(true); // Handle loading state for async fetch
  const [hasSubscription, setHasSubscription] = useState(true); // Track subscription status

  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/userdata`,
          {}, // No data needed in the request body
          { withCredentials: true }
        );

        const userData = response?.data?.user;
        const subscription = response?.data?.subscription;
        

        if (subscription) {
          setUserInfo(userData); // Set user info if the user has a valid subscription
          setHasSubscription(true); // User has a valid subscription
          toast.success('Subscription active!'); // Success toast
        } else {
          setHasSubscription(false); // No valid subscription found
          toast.error('No active subscription. Please choose a plan.'); // Error toast
        }
      } catch (error) {
        // Handle specific 403 Forbidden error (no active subscription)
        if (error?.response && error?.response?.status === 403) {
          setHasSubscription(false); // Set subscription status as false
          toast.error('Access denied. No active subscription.');
        } else {
          toast.error('Error fetching user data. Please try again.');
        }
      } finally {
        setLoading(false); // Stop loading once the request is done
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setLoading(false); // Stop loading if no token found
    }
  }, [token]);
  

  if (loading) {
    return <Loading />; // Show loading indicator while fetching data
  }

  // If the user is not authenticated, redirect to login
  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  // If the user has no active subscription, redirect to the subscription plans page
  if (!hasSubscription) {
    return <Navigate to="/subscription-plans" />;
    
    
  }

  // If the user has an active subscription, show the protected content
  return children;
};

export default ProtectedRoute;
