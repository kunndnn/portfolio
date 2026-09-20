import { motion } from "framer-motion";
import { DATA } from "../constants";
import { MapPin, ArrowRight, ServerCog, TerminalSquare, Layers, Database } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const techStack = [
    { icon: ServerCog, label: "Node.js" },
    { icon: Layers, label: "Laravel" },
    { icon: Database, label: "MongoDB" },
    { icon: TerminalSquare, label: "Python" },
  ];

  const titleWords = DATA.title.split(" ");

  return (
    <section id="home" className="relative pt-15 pb-12 sm:pt-15 sm:pb-16 px-5">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-[400px] w-[500px] rounded-full bg-[var(--accent-glow)] opacity-80 blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[var(--accent-tertiary)] opacity-[0.04] blur-[80px]" />
      </div>

      <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-5">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Backend &amp; Full-Stack
          </span>
        </motion.div>

        {/* Title — staggered editorial feel */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {titleWords.map((word, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <span className="text-[var(--text)]">{word}</span>
              ) : i === 1 ? (
                <span className="text-[var(--accent)]">{word}</span>
              ) : (
                <span className="text-[var(--text)]">{word}</span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
        >
          {DATA.tagline}
        </motion.p>

        {/* CTAs + location — inline */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="button-primary">
            See my work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="button-secondary">
            Let&apos;s talk
          </a>
          <span className="hidden items-center gap-1.5 text-sm text-[var(--text-muted)] sm:inline-flex">
            <MapPin className="h-3.5 w-3.5" />
            {DATA.location.split(",")[0]}
          </span>
        </motion.div>

        {/* Tech strip */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-12 flex items-center gap-3"
        >
          <span className="h-px flex-1 max-w-[60px] bg-[var(--border-strong)]" />
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ icon: Icon, label }) => (
              <span key={label} className="badge inline-flex items-center gap-1.5">
                <Icon className="h-3 w-3 opacity-50" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-10 flex gap-8 sm:gap-12"
        >
          <div>
            <span className="text-2xl font-bold tracking-tight text-[var(--text)]">3+</span>
            <p className="text-xs text-[var(--text-muted)]">Years building</p>
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-[var(--text)]">4</span>
            <p className="text-xs text-[var(--text-muted)]">Projects shipped</p>
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-[var(--text)]">10+</span>
            <p className="text-xs text-[var(--text-muted)]">Tech stack</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
