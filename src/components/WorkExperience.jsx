import React from "react";

function WorkExperience({darkMode}) {
  return (
    <div>
      <h1 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>Work Experience</h1>
      <div className="relative">
        <div className="flex items-start mb-12">
          <div className="relative z-10">
            <div className="w-32 flex items-start justify-center">
              <img
                src="/images/procol.png"
                alt="Company Logo"
                className={`w-20 h-20 rounded-full ${darkMode ? 'border-gray-800' : 'border-white'} border-4 shadow-md`}
              />
            </div>
          </div>

          <div className="flex-1 pt-2">
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Software Engineer Intern</h2>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center"></div>
                <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>Procol</span>
              </div>
            </div>
          </div>

          <div className={`w-48 text-right ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            April 2025 - Present
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;