import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { socialLinks } from "../constants";

function Socials({ darkMode }) {
  return (
    <div className="flex h-10 gap-3 mt-2">
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1yyFhcqz0gB_BUNeZUHY4SOHgvEyRCw_D/view?usp=sharing"
        className={`border ${darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 text-black hover:bg-gray-100'} 
        flex justify-center w-28 items-center rounded-full px-4 py-2 gap-1 transition duration-300 ease-in-out font-medium group`}
      >
        <span className="transition-all duration-300 group-hover:mr-2">
          Resume
        </span>
        <span className="transition-all duration-300">&gt;</span>
      </a>
      <p className={`${darkMode ? 'border-gray-700' : 'border-gray-300'} h-full border`}></p>
      <div className="flex items-center gap-2 text-xl p-1">
        {socialLinks.map((social, index) => {
          return <SocialIcon key={index} social={social} darkMode={darkMode} />;
        })}
      </div>
    </div>
  );
}

function SocialIcon({ social, darkMode }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`relative flex items-center border ${
        darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
      } p-1 rounded-lg transition duration-300 ease-in-out`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${
          darkMode 
            ? 'text-gray-400 hover:text-white' 
            : 'text-gray-400 hover:text-black'
        } transition duration-300 ease-in-out`}
      >
        {social.username === "msujal_malhotra" && <FaXTwitter />}
        {social.username === "sujal1256" && <FaGithub />}
        {social.username === "sujal-malhotra" && <FaLinkedin />}
      </a>

      {showTooltip && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
          {social.username}
        </div>
      )}
    </div>
  );
}

export default Socials;