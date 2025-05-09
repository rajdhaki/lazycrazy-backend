import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const Register=async(req,res)=>{
    try {
        const {fullName,email,password}=req.body;
        if(!fullName || !email || !password){
          return  res.status(400).json({message:"All field are required",success:false})
        }
        const user=await User.findOne({email})
        if(user){
          return  res.status(400).json({message:"Already email is register",success:false})
        }
        const hashPassword=await bcrypt.hash(password,10)
        await User.create({fullName,email,password:hashPassword})
      return  res.status(200).json({message:"User is successfully are register",success:true})
    } catch (error) {
        console.log("signup",error)
    }
}

export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
           return res.status(401).json({message:"All field are required",success:false})
        }
        const user=await User.findOne({email})
        if(!user){
           return res.status(401).json({message:"email or password are incorrected",success:false})
        }
        const isPassword=await bcrypt.compare(password,user.password)
        if(!isPassword){
           return res.status(401).json({message:"email or password are incorrected",success:false})
        }
        const token=await jwt.sign({userId:user._id},process.env.SERECT_KEY,{expiresIn:'1d'})
       return res.status(200).cookie("token",token,{maxAge:1 * 24 * 60 * 60 * 1000,httpsOnly: true, sameSite: 'strict'}).json({message:`USer is successfully ${user.fullName}`,success:true,user})
        console.log(token)
    } catch (error) {
        console.log("Login",error)
    }
}

export const Logout=async(req,res)=>{
    try {
       return res.status(200).cookie("token"," ",{ maxAge: 0 }).json({message:"User Logout",success:true})
    } catch (error) {
       console.log("eroor",error) 
    }
}