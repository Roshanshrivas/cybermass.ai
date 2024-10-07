const Contactus = require("../models/ContactUs")
const User = require("../models/UserModel")

exports.contactUsController = async (req, res) => {

    try {
        //Fetch Data from Request Body
        const { email, name, message, phoneNo, userId } = req.body;

        //Validation
        if (!email ||!name ||!message ||!phoneNo ||!userId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        //find the user by userId
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        //verify the email matches the logged in user's email
        if(user.email !== email) {
            return res.status(400).json({
                success: false,
                message: "The email address provided does not match your registered email.",
            });
        }


        //if check if the user has already Submitted a message
        const existingContact  = await Contactus.findOne({ userId });

        if(existingContact) {
            return res.status(400).json({
                success: false,
                message: "You have already submitted a message.",
            });
        }
        

        //Create new Contact
        const newContact = new Contactus({
            email,
            name,
            message,
            phoneNo,
            userId,
        });

        const saveContactUs = await newContact.save();

        if(!saveContactUs) {
            return res.status(500).json({ 
                 success: false, 
                 message: "Failed to save subscription" 
                });
        }

        res.status(200).json({
            success: true,
            message: "Your Data has been saved successfully",
            contact: saveContactUs,
        });

        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Contact Us Failed",
        });
    }
}