import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
      rounded-lg border overflow-hidden shadow-sm lg:w-76 w-full flex flex-col 
      transition-all duration-300 ease-in-out hover:shadow-lg 
      ${darkMode ? 'hover:border-gray-600' : 'hover:border-gray-300'} hover:-translate-y-1`}
    >
      <div className="p-6">
        <h2 className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} transition-colors duration-300 group-hover:text-blue-500`}>
          {project.projectName}
        </h2>

        <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm`}>
          {project.projectDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.projectTechStack.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full ${
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              } text-[10px] font-medium
                transition-colors duration-300 ${
                  darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.projectImage && (
        <div className="px-5 overflow-hidden">
          <img
            src={project.projectImage}
            alt="Project"
            className={`h-40 w-full rounded-lg ${
              darkMode ? 'shadow-gray-900' : 'shadow-gray-400'
            } shadow object-cover 
            transition-transform duration-500 ease-in-out hover:scale-105`}
          />
        </div>
      )}

      {/* Card Footer */}
      <div className={`p-4 mt-auto flex justify-between items-center border-t ${
        darkMode ? 'border-gray-700' : 'border-gray-100'
      }`}>
        {project.projectUrl ? (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
            } text-sm font-medium
            transition-colors duration-300 ease-in-out`}
          >
            Visit now{" "}
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        ) : (
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Coming Soon..
          </p>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            darkMode ? 'bg-gray-900 hover:bg-gray-950' : 'bg-black hover:bg-gray-800'
          } text-white px-3 py-1 rounded-md flex items-center text-sm gap-1
          transition-all duration-300 ease-in-out hover:shadow-md`}
        >
          <FaGithub className="transition-transform duration-300 ease-in-out group-hover:rotate-12" />
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;