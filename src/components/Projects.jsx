import Section from "./common/Section";
import { DATA } from "../constants";
import Tag from "./common/Tag";
import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const techColors = {
  "Javascript": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  "Node.js": "bg-green-500/10 text-green-700 dark:text-green-400",
  "React.js": "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  "gh-pages": "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  "google/generative-ai": "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  "react-toastify": "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  "axios": "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  "Python": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  "tkinter": "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
  "pyautogui": "bg-teal-500/10 text-teal-700 dark:text-teal-400",
  "Pillow": "bg-pink-500/10 text-pink-700 dark:text-pink-400",
  "MongoDB": "bg-green-500/10 text-green-700 dark:text-green-400",
  "Socket.io": "bg-gray-500/10 text-gray-700 dark:text-gray-400",
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        className="grid gap-5 sm:grid-cols-2"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {DATA.projects.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="card group overflow-hidden"
          >
            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-[var(--text)]">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {p.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      techColors[t] || "bg-[var(--surface-muted)] text-[var(--text-muted)]"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-ghost inline-flex items-center gap-1.5 px-0 text-sm"
                  >
                    {l.label === "Code" ? (
                      <Code2 className="h-3.5 w-3.5" />
                    ) : (
                      <ExternalLink className="h-3.5 w-3.5" />
                    )}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
