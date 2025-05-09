import mongoose from "mongoose";

const dbConnection=async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Db is connected")
    }).catch((err)=>{
        console.log(err)
    })
}

export default dbConnection