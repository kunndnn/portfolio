import Section from "./common/Section";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Main bio */}
        <motion.div
          className="lg:col-span-7 space-y-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed sm:text-xl"
          >
            I&apos;m a backend developer with strong expertise in Node.js and Laravel,
            building secure, scalable, and high-performing applications.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-[var(--text-muted)] leading-relaxed"
          >
            My experience includes designing REST APIs, database architectures,
            authentication systems, and integrations — ensuring reliable backend
            solutions that power modern web applications.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-[var(--text-muted)] leading-relaxed"
          >
            Alongside backend work, I have working knowledge of React.js and I&apos;m
            actively improving my frontend skills to become a full-stack MERN
            developer. I also have hands-on experience with Python automation and
            web scraping.
          </motion.p>
        </motion.div>

        {/* Quick facts — editorial style */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-6">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl bg-[var(--accent)] opacity-[0.06]" />

            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Quick facts
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <div>
                  <span className="font-medium text-[var(--text)]">Based in</span>
                  <span className="text-[var(--text-muted)]"> — Chandigarh, India</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                <div>
                  <span className="font-medium text-[var(--text)]">Focus</span>
                  <span className="text-[var(--text-muted)]"> — Backend &amp; Full-Stack</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-tertiary)]" />
                <div>
                  <span className="font-medium text-[var(--text)]">Currently</span>
                  <span className="text-[var(--text-muted)]"> — Open to opportunities</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-[var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
                Highlights
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-[var(--accent)]">→</span>
                  Built realtime chat applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-[var(--accent)]">→</span>
                  Shipped dual CJS/ESM npm packages
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-[var(--accent)]">→</span>
                  Built utility tools web application
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
