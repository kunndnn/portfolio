export default function Tag({ children, accent = false }) {
  return (
    <span className={accent ? "badge-accent" : "badge"}>
      {children}
    </span>
  );
}
