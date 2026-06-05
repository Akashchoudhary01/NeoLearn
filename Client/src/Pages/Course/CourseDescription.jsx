import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeLayout from '../../Layout/HomeLayout';
import { useSelector } from 'react-redux';

const CourseDescription = () => {
    const { state } = useLocation();
    console.log(state);

    const {data , role} = useSelector((state)=> state.auth);
    
  return (
    <HomeLayout>

   <div className="min-h-[90vh] px-4 py-12 text-white">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

    {/* Left Section */}
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800">
      <img
        src={state?.data?.thumbnail?.secure_url}
        alt="Course Thumbnail"
        className="w-full h-72 object-cover"
      />

      <div className="p-6 space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Instructor</span>
          <span className="font-semibold text-yellow-400">
            {state?.data?.createdBy}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Lectures</span>
          <span className="font-semibold">
            {state?.data?.noOfLecture}
          </span>
        </div>

        {role === "ADMIN" ||
        data?.subscription?.status === "ACTIVE" ? (
          <button className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition duration-300 font-semibold">
            Watch Lectures
          </button>
        ) : (
          <button className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition duration-300 font-semibold text-black">
            Subscribe Now
          </button>
        )}
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col justify-center">
      <span className="text-yellow-500 font-medium uppercase tracking-wider">
        Premium Course
      </span>

      <h1 className="text-4xl font-bold mt-2 mb-6">
        {state?.data?.title}
      </h1>

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Course Description
        </h2>

        <p className="text-gray-300 leading-relaxed">
          {state?.data?.description}
        </p>
      </div>
    </div>

  </div>
</div>
    </HomeLayout>
  )
}

export default CourseDescription
