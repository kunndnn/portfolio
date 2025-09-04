// theme-context.js
import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light"); // default fallback

  // set initial mode before paint
  useLayoutEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = localStorage.getItem("deviceTheme");
    const initialMode = saved ?? (prefersDark ? "dark" : "light");
    setMode(initialMode);

    // apply immediately to <html>
    document.documentElement.classList.toggle("dark", initialMode === "dark");
  }, []);

  // apply changes + persist
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("deviceTheme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
