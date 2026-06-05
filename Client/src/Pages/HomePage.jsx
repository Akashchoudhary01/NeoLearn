import React from "react";
import HomeLayout from "../Layout/HomeLayout";
import { Link } from "react-router-dom";
import mainImage from '../assets/Assets/Images/main-image.png'

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="flex h-[90vh] text-white gap-10 mx-16  justify-center items-center">
        <div className="w-1/2 space-y-6">
          <h1 className=" text-5xl font-semibold">
            Find our Best{" "}
            <span className="text-yellow-300">Online Courses</span>{" "}
          </h1>
          <h4 className="text-xl">
            We have a large library of online courses taught by highly skilled
            and qualified faculty at a very{" "}
            <span className="italic">Affordable cost</span> .
          </h4>
        <div className="space-x-6 ">
          <Link to="/courses" >
          <button className="bg-yellow-300 text-xl rounded-md active:scale-95 px-5 py-3 text-black italic transition-all ease-in-out duration-300 hover:bg-yellow-400 hover:scale-95">Explore Courses</button>
          </Link>
          <Link to="/contact" >
          <button className="bg-indigo-500 text-xl rounded-md active:scale-95 px-6 py-3 text-black italic transition-all ease-in-out duration-300 hover:bg-indigo-400 hover:scale-95">Contact Us</button>
          </Link>

        </div>

        </div>
        <div className="w-1/2 flex justify-center items-center">
         <img src={mainImage} alt="mainImg" />

        </div>
        
      </div>
    </HomeLayout>
  );
};

export default HomePage;
