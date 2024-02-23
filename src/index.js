import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkModeWrapper() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {isDarkMode ? (
        <MdLightMode
          className="light-mode-toggle dark-mode-toggle  hover:text-teal-800  h-6  w-6  text-xs  lg:h-8  lg:w-12 hover:bg-gray-300"
          onClick={toggleDarkMode}
          // size={35}
        />
      ) : (
        <MdDarkMode
          className="dark-mode-toggle   text-xs    hover:text-teal-800   h-6   w-6   lg:h-8  lg:w-12 hover:bg-gray-300"
          onClick={toggleDarkMode}
          // size={35}
        />
      )}
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeWrapper />
  </React.StrictMode>
);

reportWebVitals();
