import { Link } from "react-scroll";
import { LuSunMedium, LuSunMoon } from "react-icons/lu";

function Navigator({ darkMode, toggleDarkMode }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="sticky w-full justify-center z-50 bg-transparent bottom-2 hidden sm:flex">
      <div className="flex items-center py-1 px-6 rounded-full my-4 bg-white backdrop-blur-sm border border-gray-300">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            duration={500}
            spy={true}
            offset={-100}
            isDynamic={true}
            ignoreCancelEvents={false}
            activeClass="text-gray-900 font-medium border-b-2 border-gray-900"
            className="cursor-pointer text-sm px-5 py-2 mx-1 rounded-md transition-colors duration-200 text-gray-600 hover:text-gray-900"
          >
            {item.label}
          </Link>
        ))}

        <button
          className="ml-4 p-1 rounded-full flex items-center justify-center border border-gray-200 bg-gray-50"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <LuSunMedium size={22} /> : <LuSunMoon size={22} />}
        </button>
      </div>
    </div>
  );
}

export default Navigator;
