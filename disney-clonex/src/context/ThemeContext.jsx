import { createContext, useState, useEffect, useContext } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true); 
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      localStorage.setItem("app-theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("app-theme", "light");
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}