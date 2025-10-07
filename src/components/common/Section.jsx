export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>  
      {children}
    </section>
  );
}
