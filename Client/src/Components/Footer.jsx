import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-white px-10 space-y-10 pt-6 bg-gray-800 flex flex-col sm:flex-row justify-between items-center z-50 gap-4">
      
      {/* Left Side */}
      <section className="flex justify-center items-center">
        <h2 className="text-sm sm:text-lg">
          © {year} | All Rights Reserved
        </h2>
      </section>

      {/* Right Side */}
      <section className="flex justify-center items-center gap-4 text-xl">
        <a href="#" className="hover:text-blue-500 transition">
          <FaFacebookF />
        </a>

        <a href="#" className="hover:text-gray-400 hover:scale-105 transition">
          <FaGithub />
        </a>

        <a href="#" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>

        <a href="#" className="hover:text-blue-400 transition">
          <FaLinkedinIn />
        </a>
      </section>
    </div>
  );
};

export default Footer;