export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium opacity-90">
      {children}
    </span>
  );
}
