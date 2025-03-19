// 📌 File: Usecontext.js
import React, { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeMode = {
  Light: 1,
  Dark: 2,
};

const ThemeClass = {
  [ThemeMode.Dark]: "dark",
  [ThemeMode.Light]: "light",
};

function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(ThemeMode.Dark);

  function addThemeClass(className, removeClassName) {
    const body = document.getElementsByTagName("body")[0];
    removeThemeClass(body, removeClassName);
    body.classList.add(className);
  }

  function removeThemeClass(body, className) {
    if (!className) return;
    body.classList.remove(className);
  }

  useEffect(() => {
    addThemeClass(ThemeClass[themeMode]);
  }, [themeMode]);

  function handleToggle() {
    setThemeMode((prevMode) => {
      const newThemeMode = prevMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
      const removeClassName = ThemeClass[prevMode];
      addThemeClass(ThemeClass[newThemeMode], removeClassName);
      return newThemeMode;
    });
  }

  return (
   
    <ThemeContext.Provider value={{ themeMode, handleToggle }}>
       <h1>context api</h1>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Custom hook for using theme context
function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useThemeContext, ThemeContext };
