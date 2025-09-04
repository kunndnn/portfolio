import { useTheme } from "../theme-context";

export default function Footer() {
    const { mode } = useTheme();

  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-70">
        © {new Date().getFullYear()} Built with {mode === "dark" ? "🤍" : "🖤"}
      </div>
    </footer>
  );
}
