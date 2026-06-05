import React, { useState } from "react";
import { toast } from "react-hot-toast";
import HomeLayout from "../Layout/HomeLayout";

const ContactUs = () => {

    const [userInput , setUserInput] = useState({
        name : "",
        email : "",
        message : "",
    })

    function handleInputChange(e){
      const {name , value} = e.target;
      console.log(name , value);

      setUserInput({
        ...userInput,
        [name] : value
      })
   }

   async function handleformSubit(e){
    e.preventDefault();
    if(!userInput.email || !userInput.name || !userInput.message){
        toast.error("Every Field in mandatory ! ")
        return;
    }

   }

  return (
    <HomeLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-gray-900 my-5 text-white p-6 rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h1 className="text-3xl justify-self-center tracking-[3px]">
            Contact us
          </h1>

          <div className="mt-4  ">

            <form action="" 
            className="flex flex-col"
            noValidate
             onSubmit={handleformSubit}>
              <div className="mx-3 mb-4 flex flex-col ">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  
                  value={userInput.name}
                  placeholder="Enter your name"
                  className="bg-gray-800  rounded-md px-3 mt-2 py-1 outline-none border-none"
                  onChange={handleInputChange}
                  />
              </div>
              {/* Email */}
              <div className="mx-3 flex mb-4 flex-col ">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="xyz@gmail.com"
                  name="email"
                  value={userInput.email}
                  className="bg-gray-800 rounded-md px-3 mt-2 py-1 outline-none border-none"
                  onChange={handleInputChange}
                  />
              </div>
              {/* Message */}
              <div className="mx-3 mb-4 flex flex-col ">
                <label htmlFor="name">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={userInput.message}
                  className="bg-gray-800 px-3 mt-2 py-1 outline-none resize-none h-40 rounded-md border-none"
                  onChange={handleInputChange}
                  />
              </div>

            
                <button className="px-3 py-2 mx-3 my-2 text-xl rounded-md active:scale-95 bg-blue-500 outline-1 outline-black ">
                  Submit
                </button>
            
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactUs;
