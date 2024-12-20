import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({})

const app=express();



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'https//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))

let port = process.env.port||3000;
app.listen(port, ()=> {
    connectDB()
    console.log(`listening to port ${port}`)
})