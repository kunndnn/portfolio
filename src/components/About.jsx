import Section from "./common/Section";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Main content */}
        <motion.div
          className="lg:col-span-3 space-y-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-[var(--text)] sm:text-xl"
          >
            I&apos;m a backend developer with strong expertise in Node.js and Laravel,
            building secure, scalable, and high-performing applications.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="leading-relaxed text-[var(--text-muted)]"
          >
            My experience includes designing REST APIs, database architectures,
            authentication systems, and integrations, ensuring reliable backend
            solutions that power modern web applications.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="leading-relaxed text-[var(--text-muted)]"
          >
            Alongside backend work, I have working knowledge of React.js and I&apos;m
            actively improving my frontend skills to become a full-stack MERN
            developer. I also have hands-on experience with Python automation and
            web scraping.
          </motion.p>
        </motion.div>

        {/* Side facts */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card p-6 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">
                Chandigarh, India (IST)
              </p>
            </div>
            <div className="h-px bg-[var(--border)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Focus
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">
                Backend &amp; Full-Stack Development
              </p>
            </div>
            <div className="h-px bg-[var(--border)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Highlights
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  Built realtime chat applications
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  Shipped dual CJS/ESM npm packages
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
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
