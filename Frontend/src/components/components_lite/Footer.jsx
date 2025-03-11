

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-navy text-white text-center py-6 relative" style={{ backgroundColor: "#001F3F" }}>
      {/* Crazy Border Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
      
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/sachin-kumar-yadav-766859297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sachin70115053/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sachinyadavsky7011@gmail.com"
            className="text-white hover:text-gray-300 text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+917011505312"
            className="text-white hover:text-gray-300 text-2xl"
          >
            <FaPhone />
          </a>
        </div>

        {/* Additional Information */}
        <div className="text-sm space-y-2">
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Location: India
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaBriefcase /> Profession: Software Developer
          </p>
          <p>Passionate about Web Development, Cloud Computing, and AI.</p>
        </div>

        <p className="text-sm mt-4">© {new Date().getFullYear()} Sachin Kumar Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
