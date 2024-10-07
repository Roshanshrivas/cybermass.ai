import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPlans: null,
    subscriptionStatus: null,
    userId: null,
    subscriptionId: null,
};

const subscriptionSlice = createSlice({
    name:"subscription",
    initialState: initialState,
    reducers: {
        setSelectedPlans(state, value) {
            state.selectedPlans = value.payload;
            // localStorage.setItem('selectedPlan', action.payload);
        },
        setSubscriptionStatus(state, value) {
            state.subscriptionStatus = value.payload;
            // localStorage.setItem('subscriptionStatus', action.payload);
        },
        setUserId(state, value) {
            state.userId = value.payload;
            // localStorage.setItem('userId', action.payload);
        },
        setSubscriptionId(state, value) {
            state.subscriptionId = value.payload;
            // localStorage.setItem('subscriptionId', action.payload);
        },
        resetSubscription(state) {
            state.selectedPlans = null;
            state.subscriptionStatus = null;
            state.userId = null;
            state.subscriptionId = null;
            localStorage.removeItem('selectedPlan');
            localStorage.removeItem('subscriptionStatus');
            localStorage.removeItem('userId');
            localStorage.removeItem('subscriptionId');
        }
    }
});

export const { setSelectedPlans, setSubscriptionStatus, setUserId, setSubscriptionId, resetSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
