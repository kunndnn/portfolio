import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";
import { useTheme } from "../theme-context";
import Card from "./common/Card";

export default function Skills() {
  const { mode } = useTheme();
  const clamp01 = (n) => Math.max(0, Math.min(100, n));

  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {DATA.skills.map((group, i) => (
          <Card
            key={i}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="p-6"
            style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
          >
            <h3 className="mb-6 text-xl font-black uppercase font-mono bg-black text-white px-3 py-1 inline-block shadow-[4px_4px_0px_0px_var(--accent)]">
              {group.group}
            </h3>
            <ul className="space-y-6">
              {group.items.map((s) => (
                <li key={s.name} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--text)] group-hover:bg-[var(--accent-2)] group-hover:text-black transition-colors">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="font-bold uppercase tracking-tight">{s.name}</span>
                    </div>
                  </div>
                  {s.level && (
                    <div className="border-2 border-[var(--border)] h-4 bg-[var(--surface)] shadow-[2px_2px_0px_0px_var(--shadow-color)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${clamp01(s.level)}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[var(--accent-2)] border-r-2 border-[var(--border)]"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
