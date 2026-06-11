import React, { useEffect } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../../Redux/Slices/CourseSlice";
import CourseCard from "./CourseCard";

const Course = () => {
  const dispatch = useDispatch();

  const { courseData, loading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] text-white px-4 sm:px-8 lg:px-12 py-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Explore Courses Created by{" "}
            <span className="text-yellow-300">Industry Experts</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Learn from experienced professionals and gain practical skills
            through high-quality courses designed for real-world success.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {/* Empty State */}
        {!loading && (!courseData || courseData.length === 0) && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No Courses Available
            </h2>
            <p className="text-gray-400 mt-2">
              Please check back later.
            </p>
          </div>
        )}

        {/* Course Cards */}
        {!loading && courseData?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8">
            {courseData.map((course) => (
              <CourseCard key={course._id} data={course} />
            ))}
          </div>
        )}
      </div>
    </HomeLayout>
  );
};

export default Course;