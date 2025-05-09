import jwt from "jsonwebtoken";
export const isAuthenicated=async(req,res,next)=>{
    try {
        const {token}=req.cookies
        if(!token){
            res.status(401).json({message:"user is not authenciated",success:false})
        }
        const decoded=await jwt.verify(token,process.env.SERECT_KEY)
        if(!decoded){
            res.status(401).json({message:"user is not authenciated",success:false})
        }
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.log("Middleware",error)
    }
}