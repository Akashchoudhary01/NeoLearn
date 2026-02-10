import mongoose, { Schema, model } from "mongoose";

const userModel = new mongoose.Schema(
  {
    fullName: {
      type: String,
      minLength: [5, "name must be at least 2 characters"],
      maxLength: [50, "name should be less then 50 characters"],
      required: [true, "Name is Required"],
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format",
      ],
    },
    password: {
      type: String,
      required: [true , "Password is Required"],
      minLength: [8 , "Password must be at least 8 characters"],
      select : false
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    avtar : {
        public_id :{
            type : String
        },
        secure_url :{
            type : String
        }
    },
    forgotPasswordToken : String,
    forgotPasswordExpiry : Date,
  },
  {
    timestamps: true,
  },
);

const USER = model("user", userModel);

export default USER;
