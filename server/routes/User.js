const express = require("express");
const router = express.Router();


//Import the required controllers and  middleware functions

const { signup, login, forgot, verify, userData} = require("../controllers/Auth");
const { auth } = require("../middlewares/auth");



//<===============================================>
//<===========[ Authentication Routes ]===========>
//<===============================================>

//Route for user login
router.post('/login', login);

//Route for user signUp
router.post('/signup', signup);

//Route for logout
// router.post('/logout', logout);

//Route for Forgot Password
router.post('/forgot', forgot);

//Route for Verify otp
router.post("/verify-otp", verify);

//Route for userdata
router.post("/userdata", auth, userData);




module.exports = router;


