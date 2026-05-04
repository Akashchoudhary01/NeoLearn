import React from "react";
import HomeLayout from "../Layout/HomeLayout";

// main image
import AboutImg from "../assets/Assets/Images/aboutMainImage.png";

// carousel images
import apj from "../assets/Assets/Images/apj.png";
import billGates from "../assets/Assets/Images/billGates.png";
import nelsonMandela from "../assets/Assets/Images/nelsonMandela.png";
import sj from "../assets/Assets/Images/sj.png";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="px-10 py-16 text-white">

        {/* 🔹 Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              Affordable & Quality Learning
            </h1>

            <p className="text-gray-300 text-lg">
              NeoLearn is a thoughtfully designed learning platform that brings
              high-quality courses together in one place. With structured content
              and easy navigation, it helps you build skills at your own pace.
            </p>

            <p className="text-gray-300 text-lg">
              With a balance of clarity and practical exposure, NeoLearn is built
              for learners who value consistency and real progress.
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

            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full flex justify-center">
              <img src={sj} className="w-60 h-60 object-cover rounded-full border-4 border-gray-300" />
              <div className="absolute inset-y-1/2 left-5 right-5 flex justify-between px-4">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full flex justify-center">
              <img src={apj} className="w-60 h-60 object-cover rounded-full border-4 border-gray-300" />
              <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between px-4">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full flex justify-center">
              <img src={nelsonMandela} className="w-60 h-60 object-cover rounded-full border-4 border-gray-300" />
              <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between px-4">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full flex justify-center">
              <img src={billGates} className="w-60 h-60 object-cover rounded-full border-4 border-gray-300" />
              <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between px-4">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </HomeLayout>
  );
};

export default AboutUs;