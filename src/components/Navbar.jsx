import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { DATA } from "../constants";

export default function Navbar({ mode, toggleMode }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">
            {DATA.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm opacity-80 hover:opacity-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <a
              href={DATA.resumeUrl}
              download
              className="hidden md:inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:shadow-sm"
            >
              <Download className="h-4 w-4" /> CV
            </a>
            <button
              aria-label="Toggle dark mode"
              onClick={toggleMode}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border hover:shadow-sm"
            >
              {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <nav className="flex flex-col gap-4 py-4 md:hidden">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-sm opacity-80 hover:opacity-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={DATA.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:shadow-sm"
            >
              <Download className="h-4 w-4" /> CV
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
