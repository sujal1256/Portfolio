import React, { useState, useEffect } from "react";
import Body from "./Body";
import BlurScreen from "./BlurScreen";

function Layout() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check initial color scheme preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);

    // Set up listener for color scheme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(
    "window.matchMedia",
    window.matchMedia("(prefers-color-scheme: light)")
  );

  return (
    <div
      className={`flex justify-center w-full min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Body darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <BlurScreen darkMode={darkMode} />
    </div>
  );
}

export default Layout;
