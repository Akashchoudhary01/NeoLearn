import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { useSelector } from "react-redux";

const CourseDescription = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { data, role } = useSelector((state) => state.auth);

  if (!state?.data) {
    return (
      <HomeLayout>
        <div className="min-h-[90vh] flex justify-center items-center text-white">
          <h1 className="text-2xl font-bold">
            Course details not found.
          </h1>
        </div>
      </HomeLayout>
    );
  }

  const course = state.data;

  return (
    <HomeLayout>
      <div className="min-h-[90vh] px-4 sm:px-6 lg:px-12 py-10 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Left Section */}
          <div className="bg-base-200 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={course?.thumbnail?.secure_url}
              alt={course?.title}
              className="w-full h-64 sm:h-80 object-cover"
            />

            <div className="p-6 space-y-6">

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-300 p-4 rounded-xl text-center">
                  <p className="text-sm text-gray-400">Instructor</p>
                  <p className="font-semibold text-yellow-400 mt-1">
                    {course?.createdBy}
                  </p>
                </div>

                <div className="bg-base-300 p-4 rounded-xl text-center">
                  <p className="text-sm text-gray-400">Lectures</p>
                  <p className="font-semibold mt-1">
                    {course?.numberOfLectures || course?.noOfLecture}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              {role === "ADMIN" ||
              data?.subscription?.status === "active" ? (
                <button
                  className="btn btn-success w-full text-lg"
                  onClick={() =>
                    navigate("/courses/lecture", {
                      state: course,
                    })
                  }
                >
                  Watch Lectures
                </button>
              ) : (
                <button
                  className="btn btn-warning w-full text-lg"
                  onClick={() => navigate("/checkout")}
                >
                  Subscribe Now
                </button>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">

            <span className="badge badge-warning badge-lg w-fit mb-4">
              Premium Course
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {course?.title}
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Learn practical skills through structured lessons and
              real-world examples.
            </p>

            <div className="bg-base-200 rounded-3xl p-6 mt-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Course Description
              </h2>

              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {course?.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="bg-base-200 p-4 rounded-xl text-center">
                📚
                <h3 className="font-semibold mt-2">Structured Learning</h3>
              </div>

              <div className="bg-base-200 p-4 rounded-xl text-center">
                🎥
                <h3 className="font-semibold mt-2">Video Lectures</h3>
              </div>

              
            </div>

          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseDescription;