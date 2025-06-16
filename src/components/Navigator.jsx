import { useState, useEffect } from "react";
import { LuSunMedium, LuSunMoon } from "react-icons/lu";

function Navigator({ darkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {            
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );
    

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      // Cleanup observer
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sticky w-full justify-center z-50 bg-transparent bottom-2 hidden sm:flex">
      <div className="flex items-center py-1 px-6 rounded-full my-4 bg-white backdrop-blur-sm border border-gray-300">
        {navItems.map((item) => (          
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer text-sm px-5 py-2 mx-1 rounded-md transition-colors duration-200 ${
              activeSection === item.id
                ? "text-gray-900 font-medium border-b-2 border-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {item.label}
            {console.log(item.id, activeSection)}
          </button>
        ))}

        <button
          className="ml-4 p-1 rounded-full flex items-center justify-center border border-gray-200 bg-gray-50"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <LuSunMedium size={22} color={"black"}/> : <LuSunMoon size={22} />}
        </button>
      </div>
    </div>
  );
}

export default Navigator;
