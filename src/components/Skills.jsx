import Section from './common/Section'
import { DATA } from "../constants";

export default function Skills() {
  // Utility: clamp 0..100
  const clamp01 = (n) => Math.max(0, Math.min(100, n));
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {DATA.skills.map((group) => (
          <div key={group.group} className="rounded-2xl border p-4">
            <h3 className="mb-3 text-sm font-semibold tracking-wide opacity-80">
              {group.group}
            </h3>
            <ul className="space-y-4">
              {group.items.map((s) => (
                <li key={s.name}>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 opacity-70" />
                      <span className="text-sm">{s.name}</span>
                    </div>
                    <span className="text-xs opacity-70">
                      {/* {clamp01(s.level)}% */}
                    </span>
                  </div>
                  <div className="h-2 rounded bg-black/5 dark:bg-white/10">
                    <div
                      className="h-2 rounded bg-black/70 dark:bg-white/80"
                      style={{ width: `${clamp01(s.level)}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
