import { DATA } from "../constants";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} {DATA.name}. Built with care.
        </p>
        <div className="flex items-center gap-4">
          {DATA.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
