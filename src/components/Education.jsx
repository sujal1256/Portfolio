import React from "react";

export default function Education({darkMode}) {
  const educationData = [
    {
      degree: "Bachelors in Computer Science",
      institution: "Chitkara University",
      duration: "Jul 2022 - Present",
    },
  ];

  return (
    <div id="education" className="max-w-3xl">
      <h2 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>Education</h2>

      <div className="space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-4">
              <div className={`w-16 h-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full flex items-center justify-center`}>
                <div className="bg-[url(/images/college.png)] bg-cover w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                </div>
              </div>
              {index < educationData.length - 1 && (
                <div className={`w-0.5 h-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} mx-auto my-2`}></div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{item.degree}</h3>
                  <div className={`mt-1 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span>{item.institution}</span>
                  </div>
                </div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}