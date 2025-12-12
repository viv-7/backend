// require("dotenv").config();  // CommonJS syntax
import connectDB from "./db/db.js";
import { connect } from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
    path: "./env"
});




connectDB();
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });

    app.on("error", (error) => {
        console.error("SERVER ERROR", error);
        throw error;
})
.catch((error) => {
    console.error("MONGODB connection failed !!", error)
    
})
          











/*
import express from "express";
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       
        app.on("error", (error) => {
            console.error("ERROR", error);
            throw error
        })
       
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        
    }catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
*/