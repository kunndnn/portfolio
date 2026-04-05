import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { DATA } from "../constants";
import { useTheme } from "../theme-context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useTheme();

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Contact" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = DATA.resumeUrl;
    link.download = "Kundan_CV.pdf"; // file name for download
    link.click();
  };

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--bg)] border-b-[3px] border-[var(--border)]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-tighter uppercase">
            {DATA.name}<span className="text-[var(--accent-3)]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm font-bold uppercase tracking-widest font-mono hover:text-[var(--accent-2)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <span
              onClick={handleDownload}
              className="brutalist-button hidden lg:inline-flex text-xs"
            >
              <Download className="h-4 w-4" /> CV
            </span>
            <button
              aria-label="Toggle dark mode"
              onClick={toggleMode}
              className="brutalist-button p-2"
            >
              {mode === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button className="lg:hidden brutalist-button p-2" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <nav className="flex flex-col gap-6 py-8 lg:hidden border-t-2 border-[var(--border)] overflow-y-auto max-h-[80vh]">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-2xl font-black uppercase font-mono hover:text-[var(--accent)] px-4 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="px-4 pt-4 border-t-2 border-[var(--border)]">
              <span
                onClick={handleDownload}
                className="brutalist-button w-full justify-center text-lg py-4"
              >
                <Download className="h-5 w-5" /> Download CV
              </span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
