import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slice/AuthSlice";
import subscriptionReducer from "../Slice/SubscriptionSlices";

const rootReducer = combineReducers({
    auth: authReducer,
    subscription: subscriptionReducer
})

export default rootReducer;