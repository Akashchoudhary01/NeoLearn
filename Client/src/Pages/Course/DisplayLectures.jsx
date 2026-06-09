import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLectureById, RemoveLecture } from "../../Redux/Slices/LectureSlice";

export default function DisplayLectures() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state?.lecture);
  const { role } = useSelector((state) => state?.auth);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handelLectureDeletion = async (courseId, lectureId) => {
    await dispatch(
      RemoveLecture({
        courseId,
        lectureId,
      }),
    );

    await dispatch(getLectureById(courseId));
  };

  useEffect(() => {
    console.log("Lecture page state:", state);

    if (!state?._id) {
      navigate("/courses");
      return;
    }

    dispatch(getLectureById(state._id));
  }, [dispatch, navigate, state]);

  return (
    <div>
      <HomeLayout>
        <div className=" flex flex-col  items-center min-h-[90vh] py-10 text-white mx-10">
          <div className="text-center text-2xl text-blue-500">
            Course Name : <span className="font-semibold ">{state?.title}</span>
          </div>
          {lectures && lectures.length > 0 ? (
            <div className="flex justify-center w-full gap-10 mt-10  ">
              {/* Left section for displaying course details and details to admin */}
              <div className="py-5 w-md  p-2 rounded-lg shadow-[0_0_10px_black]">
                <video
                  controls
                  className="object-fill rounded-tl-lg py-3 rounded-tr-lg w-full"
                  disablePictureInPicture
                  muted
                  controlsList="nodownload"
                  src={lectures && lectures[currentVideo]?.video?.secure_url}
                ></video>
                <div>
                  <h2 className="text-green-500 text-xl ">
                    {" "}
                    {""} {lectures?.[currentVideo]?.title}
                  </h2>
                  <p className="text-gray-500 text- line-clamp-4">
                    {" "}
                    {""} {lectures?.[currentVideo]?.description}
                  </p>
                </div>
              </div>
              {/* Right Section for displaying List of leccture */}
              <ul className="w-md p-2 rounded-lg shadow-[0_0_5px_black]">
                <li>
                  <p className="text-2xl">Lecture List </p>
                  {role === "ADMIN" && (
                    <button
                      onClick={() =>
                        navigate("/courses/lecture/add", {
                          state: { ...state },
                        })
                      }
                      className="bg-green-500 px-3 py-1 roundex-md hover:bg-green-600 transition-all ease-in-out duration-300"
                    >
                      Add Lecture
                    </button>
                  )}
                </li>
                {lectures &&
                  lectures.map((lecture, idx) => {
                    return (
                      <li className="space-y-3" key={lecture._id}>
                        <p
                          className="cursor-pointer "
                          onClick={() => setCurrentVideo(idx)}
                        >
                          <span> Lecture {idx + 1}</span>
                          {lecture.title}
                        </p>
                        {role === "ADMIN" && (
                          <button
                            onClick={() =>
                              handelLectureDeletion(state?._id, lecture?._id)
                            }
                            className="bg-red-500 px-3 py-1 roundex-md hover:bg-red-600 transition-all ease-in-out duration-300"
                          >
                            Delete Lecture
                          </button>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ) : (
            <>
              <h1 className="mt-10 text-4xl">
                No Lecture Available For This Course
              </h1>
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    navigate("/courses/lecture/add", {
                      state: state?.data,
                    })
                  }
                  className="bg-green-500 px-3 py-1 mt-4 roundex-md hover:bg-green-600 transition-all ease-in-out duration-300"
                >
                  Add Lecture
                </button>
              )}
            </>
          )}
        </div>
      </HomeLayout>
    </div>
  );
}
