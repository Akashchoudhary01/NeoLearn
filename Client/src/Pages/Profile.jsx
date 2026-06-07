import React from "react";
import HomeLayout from "../Layout/HomeLayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
    const userData = useSelector((state)=> state?.auth?.data);
    console.log(userData);
    
  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex justify-center items-center text-white">
        <div className="flex flex-col  justify-center w-full max-w-md bg-gray-900 text-white p-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <img src={userData?.avatar?.secure_url}
            className="w-40 m-auto rounded-full outline-2"
             alt={userData?.fullName} />
             <h1 className="text-center text-3xl m-3">{userData?.fullName}</h1>
             <div className="grid grid-cols-2 gap-3">
                <p>email</p><p>{userData?.email}</p>
                <p>role</p><p>{userData?.role}</p>
                <p>Subscription</p><p>{userData?.subscription?.status === "active" ? "Active" :"Inactive"}</p>

             </div>
             <div className="flex justify-between gap-2 my-3">
                <Link to={"/changePassword"} 
                className="w-1/2 bg-yellow-500 text-center py-1 px-2 hover:bg-yellow-600 active:scale-95  transition-all ease-in-out duration-300 rounded-md">
                
                <button>Change Password</button>
                </Link>

                <Link to={"/edit-profile"} 
                className="w-1/2 bg-blue-500 text-center py-1 px-2 hover:bg-blue-600 active:scale-95  transition-all ease-in-out duration-300 rounded-md">
                
                <button>Edit Profile</button>
                </Link>
                </div>
                {userData ?.subscription?.status !== "active" &&(
                   <button className=" bg-gray-100 text-center py-1 px-2 text-black hover:bg-zinc-300 active:scale-95  transition-all ease-in-out duration-300 rounded-md">Cancel Subscription</button>
                )}

        </div>
      </div>
    </HomeLayout>
  );
};

export default Profile;
