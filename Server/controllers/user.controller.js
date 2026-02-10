import USER from "../models/user.models.js";
import AppError from "../utils/error.js";

const cookieOption = {
    maxAge : 7 * 24 * 60 * 60 *1000,
    httpOnly : true,
    secure : true

}
const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return next(new AppError("Every field is required", 400));
    }

    const userExists = await USER.findOne({ email });

    if (userExists) {
      return next(new AppError("Email already registered", 400));
    }

    const user = await USER.create({
      fullName,
      email,
      password,
      avatar: {
        public_id: email,
        secure_url: process.env.CLOUDINARY_URL,
      },
    });

    if (!user) {
      return next(
        new AppError("User registration failed, please try again", 400)
      );
    }

    // Hide password
    user.password = undefined;

    // Generate token
    const token = user.generateJWTtoken();

    // Send cookie
    res.cookie("token", token, cookieOption);

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Every field is mandatory", 400));
    }

    const user = await USER.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return next(new AppError("Invalid credentials", 401));
    }

    const token = user.generateJWTtoken();

    // Hide password
    user.password = undefined;

    // Send cookie
    res.cookie("token", token, cookieOption);

    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.cookie("token", null, {
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully!",
  });
};

const getprofile = async(req , res)=>{
    try{

        
        const userID = req.user.id;
        const user = await USER.findById(userID);
        
        res.status(200).json({
            success : true,
            message : 'user details',
            user
        })
    }catch(e){
        return next(new AppError('Failed to fetch Profile' , 400))
    }

}

export {
    register,
    login,
    logout,
    getprofile
}