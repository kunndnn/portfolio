import { DATA } from "../constants";
import Section from "./common/Section";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-transparent"
          aria-hidden="true"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="space-y-10"
        >
          {DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="relative pl-8 group"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] transition-colors group-hover:bg-[var(--accent)]"
                aria-hidden="true"
              />

              <div className="space-y-2.5">
                <span className="text-xs font-medium text-[var(--text-muted)] tracking-wide">
                  {exp.period}
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent)]">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-2 pt-1">
                  {exp.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-1.5 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)] opacity-40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
