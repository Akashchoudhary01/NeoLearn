import AppError from "../utils/error";

const register = (req , res)=>{
    const {fullName , email , password} = req.body;

    if(!fullName || !email || !password){
        AppError
    }

}
const login = (req , res)=>{

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