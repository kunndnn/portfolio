import { useTheme } from "../theme-context";

export default function Footer() {
    const { mode } = useTheme();

  return (
    <footer className="mt-24 border-t-[4px] border-black bg-[var(--accent)]">
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-black uppercase font-mono tracking-tighter">
          © {new Date().getFullYear()} KUNDAN<span className="text-[var(--accent-3)]"></span>
        </div>
        <div className="text-lg font-bold uppercase tracking-widest bg-black text-white px-4 py-1 shadow-[4px_4px_0px_0px_var(--accent-3)]">
          Built with {mode === "dark" ? "NEON" : "INK"} 
        </div>
        <div className="flex gap-4">
          <div className="h-4 w-4 bg-black"></div>
          <div className="h-4 w-4 bg-[var(--accent-2)] border-2 border-black"></div>
          <div className="h-4 w-4 bg-[var(--accent-3)] border-2 border-black shadow-[2px_2px_0px_0px_black]"></div>
        </div>
      </div>
    </footer>
  );
}
