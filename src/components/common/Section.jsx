export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-12 ${className}`}>
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter font-mono bg-[var(--accent)] border-4 border-[var(--border)] px-4 py-2 shadow-[6px_6px_0px_0px_var(--shadow-color)]">
          {title}
        </h2>
        <div className="h-1 flex-1 bg-[var(--border)] opacity-20"></div>
      </div>  
      {children}
    </section>
  );
}
