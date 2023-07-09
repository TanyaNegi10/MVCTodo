const express=require("express");
const app=express();
require("dotenv").config();

const port=process.env.port || 3000;
 app.use(express.json);

 const todoRoutes=require("./Routers/todo");
 app.use("/app/v1",todoRoutes);

 const dbconnect=require("./config/database");
 dbconnect();

 app.listen(port,()=>{
    console.log("Server connected");
 });