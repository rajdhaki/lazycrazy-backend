import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from 'express';
import dbConnection from "./db.js";
import userRoute from './routes/userRoute.js'
import empRoute from './routes/employeeRoute.js'
import cookieParser from "cookie-parser";

dotenv.config({})


const app=express()
const PORT=process.env.PORT ||8080

dbConnection()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/user',userRoute)
app.use('/api/v1/employees',empRoute)

app.listen(PORT,()=>{
    console.log(`your server is connected on this port ${PORT}`)
})

