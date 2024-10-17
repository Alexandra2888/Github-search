import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";

const Theme: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center">
      <span className="mr-2 text-text-primary uppercase tracking-[2.5px] font-bold text-sm dark:text-white">
        {darkMode ? "Light" : "Dark"}
      </span>
      <button
        onClick={toggleDarkMode}
        className="flex items-center focus:outline-none transition-opacity hover:opacity-80"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <img
          src={darkMode ? sun : moon}
          alt={darkMode ? "Sun icon" : "Moon icon"}
          className="w-5 h-5 transition-opacity duration-300"
        />
      </button>
    </div>
  );
};

export default Theme;
