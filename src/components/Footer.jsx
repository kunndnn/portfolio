import { DATA } from "../constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-70">
        © {new Date().getFullYear()} Built with 🖤
      </div>
    </footer>
  );
}