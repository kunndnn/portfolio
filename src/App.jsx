import { useEffect, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Simple badge

export default function PortfolioApp() {
  // Theme handling
  const prefersDark = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [mode, setMode] = useState(null); // start with null, avoid mismatch

  // set initial mode after mount
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = localStorage.getItem("theme");
    setMode(saved || (prefersDark ? "dark" : "light"));
  }, []);

  // apply mode changes to <html>
  useEffect(() => {
    if (!mode) return;
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
    console.log('changed',{mode})
  };

  if (!mode) return null; // prevent flash on first load

  return (
    <div
      className={
        mode === "dark"
          ? " dark:bg-neutral-950 dark:text-neutral-50"
          : "min-h-screen bg-white text-neutral-900 antialiased"
      }
    >
      <Navbar mode={mode} toggleMode={toggleMode} />
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
