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
      {/* Conditionally render MdDarkMode or MdLightMode icon based on dark mode state */}
      {isDarkMode ? (
        <MdLightMode
          className="light-mode-toggle"
          onClick={toggleDarkMode}
          size={40} // Adjust the size of the icon as needed
        />
      ) : (
        <MdDarkMode
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          size={40} // Adjust the size of the icon as needed
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
