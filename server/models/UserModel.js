const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({


    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
    },

    password:{
        type:String,
    },


    confirmPassword:{
        type:String,
    },

    otp: {
        type: Number,
        default: 0,
    },

    image: {
        type:String,
    },

    token: {
        type:String,
    },

    resetPasswordExpires: {
        type:Date,
    },

    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription',
        // required: true
    }

},
   {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);


