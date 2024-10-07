// instance express, require express
const express = require('express');
const app = express();

// env file import
require("dotenv").config();
const PORT = process.env.PORT || 4000

//convert data in JSON
app.use(express.json());

//cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Cors
const cors = require("cors");
app.use(
    cors({
        origin: process.env.CLIENT_URL || "https://cybermass-ai.vercel.app",
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
        allowedHeaders: "Content-Type, Authorization", // Allowed headers
    })
)


// routes import and mount
//Auth Routes
const user = require("./routes/User");
app.use("/api", user);

//Subscription Routes
const subscription = require("./routes/subscriptionRoute");
app.use("/api/v1", subscription)

//Contact Us Routes
const contact = require("./routes/ContactUs");
app.use("/api", contact)



//connect Database
require("./config/database").connect();


//start server
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})







