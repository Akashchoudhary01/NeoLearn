import React from "react";
import HomeLayout from "../Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cancelSubscription } from "../Redux/Slices/RazorpaySlice";
import { getUserData } from "../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";

const Profile = () => {
    const userData = useSelector((state)=> state?.auth?.data);
    console.log(userData);
    const dispatch = useDispatch();

 async function HandleCourseUnsubscribe() {
  const confirmed = window.confirm(
    "Are you sure you want to cancel your subscription?"
  );

  if (!confirmed) return;

  const result = await dispatch(cancelSubscription());

  if (result?.payload?.success) {
    await dispatch(getUserData());
    toast.success("Subscription cancelled successfully");
  }
}
    
  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex justify-center items-center text-white">
        <div className="flex flex-col  justify-center  w-full max-w-md bg-gray-900 text-white p-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <img src={userData?.avatar?.secure_url}
            className="w-40 m-auto rounded-full outline-2"
             alt={userData?.fullName} />
             <h1 className="text-center text-3xl m-3 italic capitalize">{userData?.fullName}</h1>
           <div className="space-y-3 mt-4 mx-auto mb-4">
  <div className="flex gap-2">
    <span className="font-semibold min-w-27.5">Email:</span>
    <span className="break-all">{userData?.email}</span>
  </div>

  <div className="flex gap-2">
    <span className="font-semibold min-w-27.5">Role:</span>
    <span>{userData?.role}</span>
  </div>

  <div className="flex gap-2">
    <span className="font-semibold min-w-27.5">Subscription:</span>
    <span>
      {userData?.subscription?.status === "active"
        ? "Active"
        : "Inactive"}
    </span>
  </div>
</div>
             <div className="flex justify-between gap-2 my-3">
                <Link to={"/password/changePassword"} 
                className="w-1/2 bg-yellow-500 text-center py-1 px-2 hover:bg-yellow-600 active:scale-95  transition-all ease-in-out duration-300 rounded-md">
                
                <button >Change Password</button>
                </Link>

                <Link to={"/user/editProfile"} 
                className="w-1/2 bg-blue-500 text-center py-1 px-2 hover:bg-blue-600 active:scale-95  transition-all ease-in-out duration-300 rounded-md">
                
                <button>Edit Profile</button>
                </Link>
                </div>
                {userData ?.subscription?.status === "active" &&(
                   <button onClick={ HandleCourseUnsubscribe} className=" bg-gray-100 text-center py-1 px-2 text-black hover:bg-zinc-300 active:scale-95  transition-all ease-in-out duration-300 rounded-md">Cancel Subscription</button>
                )}

        </div>
      </div>
    </HomeLayout>
  );
};

export default Profile;
