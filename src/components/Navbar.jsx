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
      className={`sticky top-0 z-50 backdrop-blur border-b supports-[backdrop-filter]:bg-${mode === "dark" ? "neutral-900/70" : "white-900/70"
        }`}
    >
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
            <span
              onClick={handleDownload}
              className="hidden md:inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:shadow-sm cursor-pointer opacity-80 hover:opacity-100"
            >
              <Download className="h-4 w-4" /> CV
            </span>
            <button
              aria-label="Toggle dark mode"
              onClick={toggleMode}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border hover:shadow-sm cursor-pointer"
            >
              {mode === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
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
            <span
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:shadow-sm cursor-pointer opacity-80 hover:opacity-100"
            >
              <Download className="h-4 w-4" /> CV
            </span>
          </nav>
        )}
      </div>
    </header>
  );
}
