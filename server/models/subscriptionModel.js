const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    subscriptionPlan: {
        type: String, // e.g., "monthly", "semiannual", "annual"
        enum: ["monthly", "semiannual", "annual"],
        default: "monthly",
    },
    subscriptionStartDate: {
        type: Date,
        default: Date.now,
    },
    subscriptionEndDate: {
        type: Date,
    },
    subscriptionStatus: {
        type: String, // e.g., "active", "inactive", "expired"
        enum: ["active", "inactive"],
        default: "inactive",
    },
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
