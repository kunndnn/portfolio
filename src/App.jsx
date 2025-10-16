import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./theme-context";
import './App.css'

export default function PortfolioApp() {
  const { mode } = useTheme();

  return (
    <div
      className=
      "min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50"
    >
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <div className="mt-12 grid gap-12">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Writing />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
