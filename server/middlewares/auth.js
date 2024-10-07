const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require("../models/UserModel");


//Auth Middleware

exports.auth = async (req, res, next) => {
    try {
        //extract Token
        const token = req.cookies.token;

        console.log("Extracted Token from:", token ? (req.cookies.token ? "Cookies" : req.body.token ? "Body" : "Header") : "None");
       
    //Id Token is Missing
       if(!token) {
         return res.status(401).json({
             success: false,
             message: "Token is required"
         });
       }

       //Verify Token
       try {
           const decode = jwt.verify(token, process.env.JWT_SECRET);
           req.user = decode;
        
       } catch (error) {
        console.error("JWT Verification Error:", error);
          return res.status(401).json({
            success: false,
            message: error.message.includes("expired") ? "Token has expired" : "Token is invalid",
          })
       }
       next();
    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong While Verifying Token",
        });
    }
}





















