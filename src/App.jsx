import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./theme-context";

export default function PortfolioApp() {
  const { mode, toggleMode } = useTheme();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = getCookie("theme");
    const initialMode = saved ?? (prefersDark ? "dark" : "light");
    toggleMode(initialMode);
  }, []);

  useEffect(() => {
    if (!mode) return;
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    document.cookie = `theme=${mode}; path=/; max-age=600`;
  }, [mode]);

  if (!mode) return null; // prevent flash

  return (
    <div
      className={
        mode === "dark"
          ? "dark:bg-neutral-950 dark:text-neutral-50"
          : "min-h-screen bg-white text-neutral-900 antialiased"
      }
    >
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <div className="mt-12 grid gap-12">
          <About />
          <Skills />
          <Experience />
          <Projects />
          {/* <Writing /> */}
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
