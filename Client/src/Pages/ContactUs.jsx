import React, { useState } from "react";
import { toast } from "react-hot-toast";
import HomeLayout from "../Layout/HomeLayout";
import { isEmailValid } from "../Helpers/regexHelper";
import AxiosInstance from "../Helpers/AxiosInstance";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function handleformSubit(e) {
    e.preventDefault();

    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("Every field is mandatory!");
      return;
    }

    if (!isEmailValid(userInput.email)) {
      toast.error("Invalid Email!");
      return;
    }

    try {
      const response = AxiosInstance.post("/contact-us", userInput);

      toast.promise(response, {
        loading: "Sending your message...",
        success: "Message sent successfully!",
        error: "Failed to submit the form",
      });

      const contactResponse = await response;

      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Operation Failed!");
      console.log(error);
    }
  }

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="text-white flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 mt-3">
              Get In Touch
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              Have questions about our courses or need assistance?
              We'd love to hear from you. Send us a message and we'll
              respond as soon as possible.
            </p>


            
          </div>

          {/* Right Side Form */}
          <div className="bg-gray-900/90 backdrop-blur-lg text-white p-8 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.25)] border border-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">
              Contact Us
            </h2>

            <form
              className="space-y-5"
              noValidate
              onSubmit={handleformSubit}
            >
              <div>
                <label className="block mb-2 text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={userInput.name}
                  placeholder="Enter your name"
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500 transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={userInput.email}
                  placeholder="xyz@gmail.com"
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500 transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={userInput.message}
                  placeholder="Write your message..."
                  rows="6"
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 outline-none resize-none border border-gray-700 focus:border-blue-500 transition"
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-lg font-semibold transition-all duration-300 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactUs;