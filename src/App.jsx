import { useLayoutEffect, useEffect } from "react";

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

  // run before paint → no flicker
  useLayoutEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = localStorage.getItem("deviceTheme");
    const initialMode = saved ?? (prefersDark ? "dark" : "light");
    toggleMode(initialMode);
  }, []);

  // update <html> class + persist
  useEffect(() => {
    if (!mode) return;

    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");

    localStorage.setItem("deviceTheme", mode);
  }, [mode]);

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
