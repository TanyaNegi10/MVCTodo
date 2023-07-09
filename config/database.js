const mongoose=require("mongoose");
require("dotenv").config();
const dbconnect=()=>{
    mongoose
    .connect(process.env.Database_URL,{
        userNewParser:true,
        userUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log("Database connection failed");
        console.log(err.message);
        process.exit(1);
    });
};

module.exports=dbconnect;
