// theme-context.js
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(null);

  // set initial mode after mount
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = sessionStorage.getItem("theme");
    setMode(saved || (prefersDark ? "dark" : "light"));
  }, []);

  // apply mode changes to <html>
  useEffect(() => {
    if (!mode) return;
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    sessionStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  if (!mode) return null; // prevent flash

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
