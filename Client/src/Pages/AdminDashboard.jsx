import React, { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse, getAllCourse } from "../Redux/Slices/CourseSlice";
import { getStateData } from "../Redux/Slices/StateSlice";
import {Pie} from 'react-chartjs-2'
import { getPaymentRecord } from "../Redux/Slices/RazorpaySlice";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Title,
  Tooltip,
  LinearScale,
  Legend,
);

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUsersCount, SubscribedCount } = useSelector((state) => state.stat);
  const { allPayment, finalMonth, monthlySalesRecord } = useSelector(
    (state) => state.razorpay,
  );

  const userData = {
    labels : ["Registered User" , "Inrolled User"],
    datasets : [
        {
            label : "User Details",
            data : [allUsersCount , SubscribedCount],
            backgroundColor :["yellow" , "green"],
            borderWidth : 1,
            borderColor : ["yellow " , "green"]
        }
    ]
  }
  
  const salesData = {
    labels : ["Jan" , "Fab" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"],
    fontColor : "white",
    datasets : [
        {

            label : "sales / monts",
            data : monthlySalesRecord
        }
    ]
  }

  const myCourses = useSelector((state)=> state?.course?.courseData)

  async function onCourseDelete(id){
    if(window.confirm("Are You sure to delete the course ??")){
        const res = await dispatch(deleteCourse(id));
        if(res?.payload?.success){
            await dispatch(getAllCourse());
        }
    }
  }
  useEffect(() => {
    async () => {
      await dispatch(getAllCourse());
      await dispatch(getStateData());
      await dispatch(getPaymentRecord());
    };
  } , []);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-5 flex flex-col gap-10 text-white ">
        <h1 className="text-4xl  font-semibold text-blue-500 text-center ">Admin Dashboard</h1>
        <div className="grid-cols-2 gap-5 m-auto mx-10">
            <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                <div className="w-80 h-80">
              <Pie data={userData}/>      
                </div>
            </div>
        </div>

      </div>
    </HomeLayout>
  );
};

export default AdminDashboard;
