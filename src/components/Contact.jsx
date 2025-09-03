import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-2xl border p-4"
        >
          <div className="mb-2 text-sm font-semibold tracking-wide opacity-80">
            Reach me
          </div>
          <ul className="space-y-2 text-sm opacity-90">
            {DATA.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="inline-flex items-center gap-2">
                  <s.icon className="h-4 w-4" /> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
