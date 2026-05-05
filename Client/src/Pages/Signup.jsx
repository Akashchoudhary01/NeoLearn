import React, { useReducer, useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice";

const Signup = () => {

    const Navigate = useNavigate();
    const Dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState("");

  const [signupData , setSignupData] = useState({
    fullName : "",
    avatar: "",
    email: "",
    password: "",
  })

  function handleUserInput(e){
    const [name , value] = e.target;
    setSignupData({
        ...signupData,
        [name] : value
    })
  }

  function createNewAccount(e){
    e.preventDefault();
    if(!avatar || !fullName || !email || !password){
        toast.error("Please fill All The Details");
        return;
    }
    //checking for name length
    if(signupData.fullName.length > 5){
        toast.error("Name Should Be At Least 5 Character")
    }
    if(!signupData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)){
        toast.error(" Password Should At least 8 characters , 1 uppercase letter , 1 lowercase letter , 1 number (0-9) , 1 special character")
        return ;
    }
    if(!signupData.email.match (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        toast.error("Invalid Email ")
        return
    }
    if(!signupData.avatar){
        toast.error("Please Set A Profile Picture")
    }
}
//   // ✅ handle image preview
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

  function getImage(e){
    e.preventDefault();
    const uploadeImage = e.target.files[0];

    if(uploadeImage){
        setSignupData({
            ...signupData,
            avatar: uploadeImage
        })
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadeImage);
        fileReader.addEventListener("load" , function(){
            setPreviewImage(this.result)
        })
    }

    const formData = new FormData();
    formData.append("fullName" , signupData.fullName);
    formData.append("avatar" , signupData.avatar);
    formData.append("email" , signupData.email);
    formData.append("password" , signupData.password);


    //dispatch create Account Actions
    const response = await Dispatch(createAccount(formData));
    Navigate("/");
    setSignupData({
        fullName : "",
    avatar: "",
    email: "",
    password: "",
    })

    setPreviewImage= "";
  }


  return (
    <HomeLayout>
      <div className="min-h-screen flex justify-center items-center px-4">
        
        <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-xl shadow-[0_0_25px_black]">
          
          <h1 className="text-2xl font-bold text-center mb-4">
            Create Account
          </h1>

          <form className=" "  onSubmit={createNewAccount} >

            {/* Image Upload */}
            <label htmlFor="image-upload" className="cursor-pointer flex justify-center">
              {previewImage ? (
                <img
                  src={previewImage}
                 
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-400"
                  alt="preview"
                />
              ) : (
                <BsPersonCircle className="w-24 h-24 text-gray-400" />
              )}
            </label>

            <input
              type="file"
               onChange={getImage}
              accept="image/*"
              id="image-upload"
              hidden
            />

            {/* Username */}
            <div>
              <label className="text-sm text-gray-300">Username</label>
              <input
                type="text"
                value={signupData.fullName}
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                   value={signupData.email}
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                   value={signupData.password}
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 transition-all py-2 rounded-md font-semibold"
            >
              Register
            </button>

            <p className="text-end p-2">Already a user <Link to={'/login'} className="text-blue-400" >Login</Link> </p>

          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Signup;