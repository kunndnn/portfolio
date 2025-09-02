import { motion } from "framer-motion";
import { DATA } from "../constants";
import { Boxes, ChevronRight, Code2, Database, Layers, Mail, MapPin, ServerCog, TerminalSquare } from "lucide-react";
export default function Hero() {
  return (
    <section id="home" className="pt-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {DATA.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg opacity-90"
            >
              {DATA.tagline}
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:shadow-sm"
              >
                View Projects <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${DATA.email}`}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:shadow-sm"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border p-6">
              <div className="mb-4 flex items-center gap-2 opacity-80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{DATA.location}</span>
              </div>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <Database className="h-4 w-4" /> MongoDB (3+ yrs)
                </li>
                <li className="flex items-center gap-2">
                  <TerminalSquare className="h-4 w-4" /> Python (6+ mos)
                </li>
                <li className="flex items-center gap-2">
                  <Boxes className="h-4 w-4" /> React / React Native (Basic level 4+ mos)
                </li>
                <li className="flex items-center gap-2">
                  <ServerCog className="h-4 w-4" /> Node.js (3+ yrs)
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="h-4 w-4" /> Laravel (2+ yrs)
                </li>
              </ul>
              <div className="mt-4 flex gap-3">
                {DATA.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border hover:shadow-sm"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
