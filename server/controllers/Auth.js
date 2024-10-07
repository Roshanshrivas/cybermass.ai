const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require('dotenv').config();



//=================================================
// <------------------- SignUp -------------------->
//=================================================

exports.signup = async (req, res) => {
    try {
        //fetch data from req body
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        //validation
        if(!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({ 
                success: false,
                message: "All fields are required" 
            });
        }

        //Password Compare & Verify
        if(password !== confirmPassword) {
          return res.status(400).json({
              success:false,
              message:"Password and confirmPassword value does not match, please Try again",
           })
        }

       //check if User already exist or not
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ 
                success:false,
                message: "User Already Register"
            });
        }

        //hash password
        const securePassword = await bcrypt.hash(password, 10);

        //Create User
         user = await User.create({
            firstName,
            lastName,
            email,
            password:securePassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
            subscription:null,
        });

        // await user.save();
        
        //return response
        return res.status(200).json({
            success:true,
            user,
            message: "User Registered Successfully"
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            success:false,
            message: "User cannot be registered, please Try Again!!",
        });
    }
}


//=================================================
// <------------------- Login -------------------->
//=================================================

exports.login = async (req, res) => {
    try {
        //fetch data from req body
        const {email, password} = req.body;

        //Validation
         if(!email || !password){
           return res.status(403).json({
             success:false,
             message:"Please Fill Up All The Required fields",
         });
        }

        //check User already exist or not
        let user = await User.findOne({ email }).populate('subscription');

        if(!user) {
            return res.status(401).json({ 
                success:false,
                message:"User is Not Registered With Us, please SignUp to Continue",
            });
        }

        //Generate JWT after Password Compare
        if(await bcrypt.compare(password, user.password)) {

            const payLoad = {
                email: user.email,
                id: user._id,
            }

        const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        //save token to user document in database
        user.token = token;
        user.password = undefined;

        //Create cookie and send response
        const options = {
            expires: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly:true,
            // secure:true
        }

        // res.cookie("token", token, {
        //     httpOnly: true,
        //     secure:true
        // })

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login successfully`,
        })
    } else {
        return res.status(401).json({
            success:false,
            message:"Password is Incorrect",
        });
    }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure, please Try Again!!"
        });
    };
};




// Forgot password 
exports.forgot = async (req, res) => {
    try {
        const {email} = req.body;

        const generateOtp = Math.floor(Math.random() * 10000); // 4 Digit otp

        //Mailtrap-details
        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "1a086e463374e5",
              pass: "9a6e24666f8c94"
            }
          });

          const info = await transporter.sendMail({
            from: "wsmstatus@gmail.com", // sender address
            to: email, // list of receivers
            subject: "New OTP Generated", // Subject line
            html: `<b>OTP Is : <i>${generateOtp}</i></b>`, // html body
          });

          if(info.messageId) {
            let user = await User.findOneAndUpdate(
                {email},
                {otp: generateOtp},
                {new: true}
            );

            if(!user) {
                return res.status(400).json({ message: "User Not Found" });
            }
          }

          return res.status(200).json({
            message: "OTP sent to your registered email address."
        });


    } catch (error) {
        return res.status(500).json({
            message: "Forgot Password Failed, Please Try Again!!"
        })
    }
}


// Verify OTP 
exports.verify = async (req, res) => {
    try {
        // Get OTP & password
        const { otp, password } = req.body;
        // Find User otp
        let user = await User.findOne({ otp });
        // Validation
        if(!user) {
            return res.status(400).json({ message: "Invalid Otp" });
        }
        // New Password hashing
        const securePassword = await bcrypt.hash(password, 10);

        // Update User Password
         user = await User.findOneAndUpdate(
            { otp },
            { password: securePassword, otp: 0 }, 
            {new: true}
         );

         //response return
         return res.status(200).json({
            message: "Password Changed Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Not Found"
        })
    }
}



//userData
exports.userData = async (req, res) => {
    try {
        // Check if the token is present in cookies
        const token = req.cookies.token; // Assuming you're storing the token in cookies

        // If token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authorization token missing or invalid",
            });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id; // Extract userId from decoded token
        
        // Fetch user by userId and populate subscription
        const user = await User.findById(userId).populate('subscription');

        // If user not found
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        // Check if user has an active subscription
        const subscription = user.subscription;
        

        if (!subscription) {
            return res.status(403).json({
                success: false,
                message: "No active subscription",
            });
        }

        // Return user data and subscription status
        return res.status(200).json({
            success: true,
            user, // user data
            subscription, // subscription details
           
        });

    } catch (error) {
        console.error(error);

         // Handle specific JWT errors
         if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: "Token has expired",
            });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to fetch user data",
        });
    }
};











