import React, { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";

const Signup = () => {
  const [previewImage, setPreviewImage] = useState("");

  // ✅ handle image preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <HomeLayout>
      <div className="min-h-[100vh] flex justify-center items-center px-4">
        
        <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-xl shadow-[0_0_25px_black]">
          
          <h1 className="text-2xl font-bold text-center mb-4">
            Create Account
          </h1>

          <form className=" ">

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
              accept="image/*"
              id="image-upload"
              hidden
              onChange={handleImageUpload}
            />

            {/* Username */}
            <div>
              <label className="text-sm text-gray-300">Username</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
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

          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Signup;