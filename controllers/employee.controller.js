import { Employee } from "../models/employee.model.js"

export const getAllEmp=async(req,res)=>{
    try {
        const employee=await Employee.find({})
        if(!employee){
           return res.status(404).json({message:"Not Found employee ",success:false})
        }
      return  res.status(200).json({employee,success:true})
    } catch (error) {
        console.log(error)
    }
}

export const createEmp=async(req,res)=>{
    try {
        const {name,email,role}=req.body
        if(!name || !email || !role){
          return  res.status(401).json({message:"All field are required",success:false})
        }
        const emp=new Employee({name,email,role})
        await emp.save()
       return res.status(201).json({message:"employee are created",success:true})
    } catch (error) {
        console.log(error)
    }
}

export const updateEmp=async(req,res)=>{
    try {
       const {id}=req.params;
       const {name,email,role}=req.body;
       const emp=await Employee.findByIdAndUpdate(id,{name,email,role},{new:true})
       if(!emp){
        return res.status(404).json({message:"Employee are not Found",success:false})
       } 
      return res.status(201).json({message:"employee data are updated",success:true,emp})
    } catch (error) {
       console.log(error) 
    }
}

export const deleteEmp=async(req,res)=>{
    try {
        const {id}=req.params;
        const emp=await Employee.findByIdAndDelete(id)
        if(!emp){
          return  res.status(401).json({message:"Employee are not Found",success:false})
        }
        return res.status(200).json({message:"employee data are delete",success:true})
    } catch (error) {
        console.log(error)
    }
}