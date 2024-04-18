import React, { useState, useEffect } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import styles from "./FunctionTheme.css";
// import { useTranslation } from "react-i18next";
import LightThemeSVG from "../Buttons/LightThemeSVG";
import DarkThemeSVG from "../Buttons//DarkThemeSVG";

const FunctionContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const toggleTheme = useThemeUpdate();
  // const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light"
    );
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <button
      onClick={handleThemeToggle}
      style={{ height: "35px", marginTop: "60px", width: "120px" }}
    >
      {isDarkMode ? <LightThemeSVG /> : <DarkThemeSVG />}
      <span className={styles.label}>
        {/* {isDarkMode ? t("Light Theme") : t("Dark Theme")} */}
        {isDarkMode ? "Light Theme" : "Dark Theme"}
      </span>
    </button>
  );
};

export default FunctionContext;
