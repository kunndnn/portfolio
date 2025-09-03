import { DATA } from "../constants";
import Section from "./common/Section";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {DATA.experience.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl border p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold">{exp.role}</h3>
                <p className="text-sm opacity-80">{exp.company}</p>
              </div>
              <div className="text-sm opacity-70">{exp.period}</div>
            </div>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm opacity-90">
              {exp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
