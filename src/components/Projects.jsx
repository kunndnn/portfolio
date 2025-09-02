import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";
import Tag from "./common/Tag";
import { ExternalLink } from "lucide-react";
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-3">
        {DATA.projects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border p-4"
          >
            <h3 className="text-base font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm opacity-90">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1 text-sm underline-offset-2 hover:underline"
                >
                  {l.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
