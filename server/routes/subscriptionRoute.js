const express = require("express");
const router = express.Router();

//Import the required controllers and  middleware functions
const { createSubscription, verifyPayment } = require("../controllers/Subscription");
const { auth } = require("../middlewares/auth");



//<===============================================>
//<===========[ Authentication Routes ]===========>
//<===============================================>

router.post('/subscription', createSubscription);


router.post('/verify-payment', verifyPayment);




module.exports = router;
