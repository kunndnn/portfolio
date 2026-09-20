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
      <div className="relative space-y-0">
        {/* Timeline line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border-strong)]"
          aria-hidden="true"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-10"
        >
          {DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
                aria-hidden="true"
              />

              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs font-medium text-[var(--text-muted)]">
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--text)]">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[var(--accent)]">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
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
