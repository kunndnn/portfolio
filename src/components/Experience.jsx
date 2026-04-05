import { DATA } from "../constants";
import Section from "./common/Section";
import Card from "./common/Card";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-8">
        {DATA.experience.map((exp, i) => (
          <Card
            key={i}
            initial={{ x: i % 2 === 0 ? -10 : 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            className="p-8 group overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black uppercase font-mono tracking-tighter leading-tight group-hover:text-[var(--accent-3)] transition-colors">
                  {exp.role}
                </h3>
                <p className="font-bold bg-black text-white px-3 py-1 inline-block uppercase tracking-widest text-sm">
                  {exp.company}
                </p>
              </div>
              <div className="brutalist-badge bg-[var(--accent)] text-sm whitespace-nowrap self-start">
                {exp.period}
              </div>
            </div>
            <ul className="grid gap-4">
              {exp.bullets.map((b, idx) => (
                <li key={idx} className="flex gap-3 text-lg font-medium leading-snug">
                  <span className="text-[var(--accent-2)] font-black text-2xl flex-shrink-0 mt-[-2px]">»</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
