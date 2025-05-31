import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function AboutPage({ darkMode }) {
  return (
    <div>
      <h1 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>About Me</h1>
      <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex flex-col gap-1`}>
        <p>
          I'm a passionate{" "}
          <span className={`font-semibold underline ${darkMode ? 'text-white' : 'text-black'}`}>
            Full-stack developer
          </span>{" "}
          , building fast and interactive web apps using{"  "}
          <span className={`inline-flex rounded-lg items-center font-semibold ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-0.5 gap-1`}>
            <FaReact className="text-blue-600" /> React
          </span>
          ,{"  "}
          <span className={`inline-flex rounded-lg items-center font-semibold ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-0.5 gap-1`}>
            <FaNodeJs className="text-green-600" /> Node Js
          </span>
          , {"  "}
          <span className={`inline-flex rounded-lg items-center font-semibold ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-0.5 gap-1`}>
            <SiMongodb className="text-green-800" /> MongoDB
          </span>
          , and multiple other technologies.
        </p>

        <p>
          I focus on writing clean, efficient code and have strong skills in{" "}
          <span className={`font-semibold underline ${darkMode ? 'text-white' : 'text-black'}`}>
            Front-end
          </span>{" "}
          as well as{" "}
          <span className={`font-semibold underline ${darkMode ? 'text-white' : 'text-black'}`}>
            Back-end
          </span>{" "}
          development.
        </p>

        <p className="mb-4">
          I enjoy helping others by sharing what I've learned. Outside of
          coding, I like to relax by playing video games and watching movies. I
          also love to travel and explore new places.
        </p>
      </div>
    </div>
  );
}