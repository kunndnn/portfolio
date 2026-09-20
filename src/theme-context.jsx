import { createContext, useCallback, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

function getInitialMode() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("deviceTheme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("deviceTheme", mode);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
