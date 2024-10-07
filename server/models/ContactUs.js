const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    }

});


module.exports = mongoose.model("Contactus", contactSchema);
