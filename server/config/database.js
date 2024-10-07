const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        
    })
    .then( () => {console.log("DB Connection Successfully")})
    .catch( (err)=>{
        console.log("Error in DataBase Connection");
        console.log(err);
        process.exit(1);
    });
}









