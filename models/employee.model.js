import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true }
});

export const Employee=mongoose.model("Employee",employeeSchema)
