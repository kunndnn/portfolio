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
  const [mode, setMode] = useState(
    () =>
      (typeof window !== "undefined" && localStorage.getItem("theme")) ||
      (prefersDark ? "dark" : "light")
  );

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
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

