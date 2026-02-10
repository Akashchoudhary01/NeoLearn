import USER from "../models/user.models.js";
import AppError from "../utils/error.js";

const cookieOption = {
    maxAge : 7 * 24 * 60 * 60 *1000,
    httpOnly : true,
    secure : true

}

const register = async(req , res ,  next)=>{
    const {fullName , email , password} = req.body;

    if(!fullName || !email || !password){
       return next (new AppError('Every Field is Required', 400))
    }
    
    
        const userExists = await USER.findOne({email});
        
        if(userExists){
            return next (new AppError('Email  Alredy Registered', 400))

        }

       const user =  await USER.create({
            fullName,
            email,
            password,
            avtar :{
                public_id : email,
                secure_url : process.env.CLOUDINARY_URL,
            }
        })

        if(!user){
            return next(new AppError("User Registration Failed , Please Try again" , 400))
        }
    
        //file Uplode

        await user.save();

        user.password = undefined;

        const token = user.generateJWTtoken();

        res.cookie('token' , token , cookieOption );

        res.status(201).json({
            success : true,
            message : "User Registered Sucessfully !",
            user
        })

}
const login = async(req , res , next)=>{
    const {email , password} = req.body;

    if(!email || !password){
        return next(new AppError('Every Field is Mendatory' , 400));
    }
    const user  = await USER.findOne({email})
    .select('+password');

    const comparePassword=()=>{

    }

    if(!user || !user.comparePassword(password)){
        return next(new AppError("Invalid Credintials"))
    }

    const token = user.generateJWTtoken();

    user.password = undefined;

     res.cookie('token' , token , cookieOption );

      res.status(201).json({
            success : true,
            message : "User Login Sucessfully !",
            user
        })

}
const logout = (req , res)=>{

}
const getprofile = (req , res)=>{

}

export {
    register,
    login,
    logout,
    getprofile
}