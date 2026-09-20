import { motion } from "framer-motion";
import { DATA } from "../constants";
import {
  MapPin,
  ArrowRight,
  ServerCog,
  TerminalSquare,
  Layers,
  Database,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  const highlightSkills = [
    { icon: ServerCog, label: "Node.js" },
    { icon: Layers, label: "Laravel" },
    { icon: Database, label: "MongoDB" },
    { icon: TerminalSquare, label: "Python" },
  ];

  return (
    <section id="home" className="relative pt-10 pb-16 sm:pt-15 sm:pb-20 px-2">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent-glow)] opacity-60 blur-[120px]" />
      </div>

      <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <span className="eyebrow mb-6 inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-[var(--text)]">
            {DATA.title.split(" ")[0]}
          </span>
          <span className="block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
            {DATA.title.split(" ").slice(1).join(" ")} Developer
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl"
        >
          {DATA.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="button-primary">
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="button-secondary">
            Get in Touch
          </a>
        </motion.div>

        {/* Bento info row */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <div className="card flex flex-col gap-1 p-4">
            <span className="text-2xl font-bold text-[var(--accent)]">3+</span>
            <span className="text-xs font-medium text-[var(--text-muted)]">
              Years Experience
            </span>
          </div>
          <div className="card flex flex-col gap-1 p-4">
            <span className="text-2xl font-bold text-[var(--accent)]">4</span>
            <span className="text-xs font-medium text-[var(--text-muted)]">
              Projects Shipped
            </span>
          </div>
          <div className="card flex flex-col gap-1 p-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span className="text-sm font-semibold">{DATA.location.split(",")[0]}</span>
            </div>
            <span className="text-xs font-medium text-[var(--text-muted)]">
              Based in India
            </span>
          </div>
          <div className="card flex flex-col gap-1 p-4">
            <span className="text-sm font-semibold">Backend Focus</span>
            <span className="text-xs font-medium text-[var(--text-muted)]">
              Full-Stack Capable
            </span>
          </div>
        </motion.div>

        {/* Tech labels */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {highlightSkills.map(({ icon: Icon, label }) => (
            <span key={label} className="badge inline-flex items-center gap-1.5">
              <Icon className="h-3 w-3" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
