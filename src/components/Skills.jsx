import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
      >
        {DATA.skills.map((group) => (
          <motion.div
            key={group.group}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="card p-5 relative overflow-hidden"
          >
            {/* Subtle accent stripe */}
            <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-[var(--accent)] to-[var(--accent-tertiary)] opacity-30" />

            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s.name} className="badge inline-flex items-center gap-1.5">
                  <s.icon className="h-3 w-3 opacity-50" />
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
