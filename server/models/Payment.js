const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    razorpay_order_id : {
        type: 'string', 
        required: true
    },

    razorpay_payment_id : {
        type: 'string', 
        required: true
    },

    razorpay_signature : {
        type: 'string', 
        required: true
    },
       
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },


   
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
