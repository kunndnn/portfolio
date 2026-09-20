import { Download, Moon, Sun, User, Briefcase, FolderOpen, PenLine, Mail, Layers, ArrowUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { DATA } from "../constants";
import { useTheme } from "../theme-context";

const links = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "experience", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "writing", label: "Blog", icon: PenLine },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [showTop, setShowTop] = useState(false);
  const { mode, toggleMode } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);

      const scrollPos = window.scrollY + 140;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          setActive(links[i].id);
          return;
        }
      }
      setActive("home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Top navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex h-14 items-center justify-between lg:h-16">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-[var(--text)]"
            >
              {DATA.name}
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    active === l.id
                      ? "text-[var(--accent)] bg-[var(--accent-glow)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <a
                href={DATA.resumeUrl}
                download="Kundan_CV.pdf"
                className="button-secondary hidden text-xs lg:inline-flex"
              >
                <Download className="h-3.5 w-3.5" /> CV
              </a>
              <button
                aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                onClick={toggleMode}
                className="button-ghost rounded-lg p-2"
              >
                {mode === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-[var(--border)] lg:hidden safe-area-bottom">
        <div className="flex items-center justify-around px-1 py-1">
          {links.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative flex flex-col items-center gap-0.5 rounded-lg px-2.5 py-1.5 text-[10px] font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] active:scale-95"
                }`}
              >
                {isActive && (
                  <span className="absolute -top-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                )}
                <Icon
                  className="h-5 w-5 transition-all duration-200"
                  strokeWidth={isActive ? 2.2 : 1.6}
                />
                <span className="transition-all duration-200">{l.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-md)] text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] lg:bottom-8 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
