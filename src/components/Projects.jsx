import Section from "./common/Section";
import { DATA } from "../constants";
import Tag from "./common/Tag";
import { ExternalLink } from "lucide-react";
import Card from "./common/Card";
import Button from "./common/Button";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-10 lg:grid-cols-2">
        {DATA.projects.map((p) => (
          <Card
            key={p.name}
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="p-6 flex flex-col justify-between bg-[var(--surface)]"
          >
            <div>
              <h3 className="text-2xl font-black uppercase font-mono tracking-tighter bg-[var(--accent-2)] border-2 border-[var(--border)] px-3 py-1 inline-block mb-4 shadow-[4px_4px_0px_0px_var(--border)]">
                {p.name}
              </h3>
              <p className="mt-2 text-lg font-medium leading-tight">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {p.links.map((l) => (
                <Button
                  key={l.href}
                  href={l.href}
                  className="text-xs"
                  icon={ExternalLink}
                >
                  {l.label}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
