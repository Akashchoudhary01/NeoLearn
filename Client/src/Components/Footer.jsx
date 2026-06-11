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
    <footer className="bg-gray-800 text-white py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-sm sm:text-base">
            © {year} NeoLearn. All Rights Reserved.
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 hover:scale-110 transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-sm text-gray-300">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/akashchoudhary007/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Akash
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;