// src/contexts/ThemeContext.jsx
import React, { createContext, useState } from "react";

// ThemeContext তৈরি করা
export const ThemeContext = createContext();

// ThemeProvider কম্পোনেন্ট তৈরি করা
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
