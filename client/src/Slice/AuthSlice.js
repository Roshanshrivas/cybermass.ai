import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData: null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    
};

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {
        setSignupData(state, value) {
            state.signupData = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setToken(state, value) {
            state.token = value.payload;
            localStorage.setItem("token", JSON.stringify(value.payload)); // Ensure token is saved properly
        },
        setUser(state, value) {
            state.user = value.payload;
            localStorage.setItem("user", JSON.stringify(value.payload)); // Ensure user is saved properly
        },
        logout(state) {
        
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Clear any other user-specific data
            localStorage.removeItem('selectedPlan');
            localStorage.removeItem('subscriptionStatus');
            localStorage.removeItem('userId');
            localStorage.removeItem('subscriptionId');

            // Call this function when the user logs out or the page loads
            clearRazorpayIds();

            

            // Remove Razorpay IDs
            // localStorage.removeItem('rzp_checkout_anon_id');
            // localStorage.removeItem('rzp_device_id');

            // Remove any other potential IDs Razorpay might set
            // localStorage.removeItem('truecaller_user_metric');
            
          },
    }
})


export const { setSignupData, setLoading, setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;


// Function to clear unwanted Razorpay-related IDs from localStorage
function clearRazorpayIds() {
    localStorage.removeItem('rzp_checkout_anon_id');
    localStorage.removeItem('rzp_device_id');
    localStorage.removeItem('truecaller_user_metric');
}























