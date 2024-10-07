const Razorpay = require('razorpay');
const Subscription = require('../models/subscriptionModel');
const crypto = require('crypto');
const User = require("../models/UserModel");
const Payment = require('../models/Payment');



const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});




//=================================================
// <---------------- Subscription ---------------->
//=================================================

exports.createSubscription = async (req, res) => {

    try {
        const { userId, subscriptionPlan } = req.body;
        
        // Validation
        if (!userId || !subscriptionPlan) {
            return res.status(403).json({
                success: false,
                message: "User ID and Subscription Plan are required",
            });
        }

        // Define subscription duration based on the plan
        let subscriptionEndDate;
        const subscriptionStartDate = new Date();
        switch (subscriptionPlan) {
            case "monthly":
                subscriptionEndDate = new Date(subscriptionStartDate.setMonth(subscriptionStartDate.getMonth() + 1));
                break;
            case "semiannual":
                subscriptionEndDate = new Date(subscriptionStartDate.setMonth(subscriptionStartDate.getMonth() + 6));
                break;
            case "annual":
                subscriptionEndDate = new Date(subscriptionStartDate.setFullYear(subscriptionStartDate.getFullYear() + 1));
                break;
            default:
                return res.status(400).json({
                    success: false,
                    message: "Invalid subscription plan",
                });
        }

        // Create Razorpay order
        const amount = subscriptionPlan === "monthly" ? 100 : subscriptionPlan === "semiannual" ? 500 : 900;
        const currency = "INR";
        const options = {
            amount: amount * 100, // amount in the smallest currency unit
            currency,
            receipt: crypto.randomBytes(10).toString('hex'),
        };

        const order = await razorpayInstance.orders.create(options);

        // Send the order details to the frontend
        res.status(201).json({
            success: true,
            message: "Razorpay Order Created Successfully",
            order,
        });

    } catch (error) {
        console.error("Error creating subscription:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};



//=================================================
// <------------- Verify Payment ----------------->
//=================================================

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, subscriptionPlan } = req.body;


        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId || !subscriptionPlan) {
            return res.status(400).json({ success: false, message: "Missing required payment information" });
        }
        
     
        const existingSubscription = await Subscription.findOne(
            { userId, subscriptionStatus: "active" });

        if (existingSubscription) {
        // If an active subscription exists, you can choose to update it or handle it differently
        return res.status(400).json({ 
            success: false, 
            message: "User already has an active subscription" 
        });
        } else {
        // User does not have an active subscription
        console.log("No active subscription found for the user.");
        }


        // Verify the signature to confirm payment authenticity
        const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = shasum.digest('hex');

        if (digest !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Payment verification failed" });
        }


        // save the payment details
        await Payment.create({
            razorpay_order_id, 
            razorpay_payment_id, 
            razorpay_signature, 
            userId,
        });

        // Define subscription duration based on the plan
        let subscriptionEndDate;
        const subscriptionStartDate = new Date();
        switch (subscriptionPlan) {
            case "monthly":
                subscriptionEndDate = new Date(subscriptionStartDate.setMonth(subscriptionStartDate.getMonth() + 1));
                break;
            case "semiannual":
                subscriptionEndDate = new Date(subscriptionStartDate.setMonth(subscriptionStartDate.getMonth() + 6));
                break;
            case "annual":
                subscriptionEndDate = new Date(subscriptionStartDate.setFullYear(subscriptionStartDate.getFullYear() + 1));
                break;
            default:
                return res.status(400).json({
                    success: false,
                    message: "Invalid subscription plan",
                });
        }

        // Create a new subscription
        const newSubscription = new Subscription({
            userId,
            subscriptionPlan,
            subscriptionStartDate: new Date(),
            subscriptionEndDate,
            subscriptionStatus: "active",
        });

        // Save the subscription and update the user with the subscription ID
        const savedSubscription = await newSubscription.save();
        if (!savedSubscription) {
            return res.status(500).json({ success: false, message: "Failed to save subscription" });
        }
        

        // Update the user with the subscription ID
        const updatedUser = await User.findByIdAndUpdate(
             userId, 
            { subscription: savedSubscription._id },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(500).json({ success: false, message: "Failed to update user with subscription ID" });
        }


        // Fetch the user and populate the subscription details
        const userWithSubscription = await User.findById(userId).populate('subscription');

        if (!userWithSubscription) {
            console.error("User not found or populate failed");
        }

        res.status(201).json({
            success: true,
            message: "Payment Verified and Subscription Created Successfully",
            data: userWithSubscription,
            subscriptionId: savedSubscription._id,
        });

    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
