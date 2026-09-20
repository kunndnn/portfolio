import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased pb-20 lg:pb-0">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <Hero />
        <div className="space-y-16 sm:space-y-20">
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
