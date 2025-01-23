import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16 px-5 md:px-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">
            © 2025 Mriganka Das. All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/turtlebeasts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/mrig.anka_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
