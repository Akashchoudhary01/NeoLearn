import React from "react";
import HomeLayout from "../Layout/HomeLayout";

// main image
import AboutImg from "../assets/Assets/Images/aboutMainImage.png";
import Carousel from "../Layout/Carousel.jsx";
import {CelebrityData} from '../Constants/CelebrityData.js'

const AboutUs = () => {


  return (
    <HomeLayout>
      <div className="px-10 py-16 text-white">
        {/* 🔹 Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 px-10">
            <h1 className="text-4xl font-bold leading-tight">
              Affordable & Quality Learning
            </h1>

            <p className="text-gray-300 text-lg">
              NeoLearn is a thoughtfully designed learning platform that brings
              high-quality courses together in one place. With structured
              content and easy navigation, it helps you build skills at your own
              pace.
            </p>

            <p className="text-gray-300 text-lg">
              With a balance of clarity and practical exposure, NeoLearn is
              built for learners who value consistency and real progress.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={AboutImg}
              alt="about"
              className="w-[80%] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* 🔹 Carousel Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="carousel w-full">

            {CelebrityData && CelebrityData.map(celebrity => <Carousel {... celebrity} 
                                                                    key={celebrity.slideNumber}                              
                                                                    totalSlide={CelebrityData.length}
                                                                     />)}

           
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
