import { motion } from "framer-motion";

export default function Section({ id, title, eyebrow, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-12"
      >
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}
