import React from "react";
import { MdLocationPin } from "react-icons/md";
import Socials from "./Socials";
import AboutMe from "./AboutMe";
import Projects from './Projects';
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigator from "./Navigator";

function Body({darkMode, toggleDarkMode}) {

  return (
    <div 
      id="home" 
      className={`flex flex-col gap-20 sm:w-3/4 px-4 sm:px-0 lg:w-1/2 w-full pt-16 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="flex justify-between w-full flex-col md:flex-row gap-4">
        <div className="flex flex-col pt-2">
          <p className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Sujal Malhotra
          </p>
          <p className={`text-xl mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Stack Web Developer
          </p>
          <div className={`flex items-center mt-1 gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <MdLocationPin />
            Haryana, India
          </div>
          <Socials darkMode={darkMode} />
        </div>
        <div className="w-40 h-40 bg-[url('/images/me_portfolio.jpg')] bg-cover bg-center rounded-full border-2 border-transparent hover:border-blue-500 transition-all duration-300" />
      </div>

      <AboutMe darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <WorkExperience darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <Navigator darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default Body;