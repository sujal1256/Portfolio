import React from "react";
import { FaJava } from "react-icons/fa6";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiCss3,
  SiHtml5,
  SiCplusplus,
  SiRubyonrails,
  SiRuby,
} from "react-icons/si";

const SkillCard = ({ icon, name, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-lg p-4 flex flex-col items-center shadow-sm border 
                    hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out`}>
      <div className={`w-16 h-16 flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-md mb-2 p-3 
                      transition-transform duration-300 hover:rotate-3`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300 
                       group-hover:text-blue-500`}>{name}</span>
    </div>
  );
};

function Skills({darkMode}) {
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <SiJavascript
          size={40}
          color="#F7DF1E"
          className="bg-black drop-shadow-2xl drop-shadow-amber-300"
        />
      ),
    },
    {
      name: "React",
      icon: (
        <SiReact
          size={40}
          color="#61DAFB"
          className="drop-shadow-2xl drop-shadow-blue-300"
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <SiNodedotjs
          size={40}
          color="#339933"
          className="drop-shadow-2xl drop-shadow-green-300"
        />
      ),
    },
    {
      name: "Express",
      icon: (
        <SiExpress
          size={40}
          color={darkMode ? "#FFFFFF" : "#000000"}
          className="drop-shadow-2xl drop-shadow-gray-300"
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb
          size={40}
          color="#47A248"
          className="drop-shadow-2xl drop-shadow-green-300"
        />
      ),
    },
    { 
      name: "MySQL", 
      icon: <SiMysql 
              size={40} 
              color="#4479A1" 
              className="drop-shadow-2xl drop-shadow-blue-300"
            /> 
    },
    { 
      name: "Git", 
      icon: <SiGit 
              size={40} 
              color="#F05032" 
              className="drop-shadow-2xl drop-shadow-orange-300"
            /> 
    },
    { 
      name: "HTML", 
      icon: <SiHtml5 
              size={40} 
              color="#E34F26" 
              className="drop-shadow-2xl drop-shadow-orange-300"
            /> 
    },
    { 
      name: "CSS", 
      icon: <SiCss3 
              size={40} 
              color="#1572B6" 
              className="drop-shadow-2xl drop-shadow-blue-300"
            /> 
    },
    { 
      name: "Github", 
      icon: <SiGithub 
              size={40} 
              color={darkMode ? "#FFFFFF" : "#181717"} 
              className="drop-shadow-2xl drop-shadow-gray-300"
            /> 
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss 
              size={40} 
              color="#06B6D4" 
              className="drop-shadow-2xl drop-shadow-cyan-300"
            /> 
    },
    {
      name: "Java",
      icon: <FaJava
              size={40}
              color="#007396"
              className="drop-shadow-2xl drop-shadow-blue-400"
            />
    },
    {
      name: "C++",
      icon: <SiCplusplus
              size={40}
              color="#00599C"
              className="drop-shadow-2xl drop-shadow-blue-500"
            />
    },
    {
      name: "Ruby on Rails",
      icon: <SiRubyonrails
              size={40}
              color="#CC0000"
              className="drop-shadow-2xl drop-shadow-red-400"
            />
    },
    {
      name: "Ruby",
      icon: <SiRuby
              size={40}
              color="#CC342D"
              className="drop-shadow-2xl drop-shadow-red-300"
            />
    }
  ];

  return (
    <div>
      <h1 id="skills" className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default Skills;