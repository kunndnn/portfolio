import { motion } from "framer-motion";
import { DATA } from "../constants";
import {
  Boxes,
  ChevronRight,
  Database,
  Layers,
  Mail,
  MapPin,
  ServerCog,
  TerminalSquare,
} from "lucide-react";
import Card from "./common/Card";
import Button from "./common/Button";

export default function Hero() {
  const skills = [
    { icon: Database, label: "MongoDB / MySQL (3+ yrs)" },
    { icon: TerminalSquare, label: "Python (6+ mos)" },
    { icon: Boxes, label: "React / React Native (Basic level 6+ mos)" },
    { icon: ServerCog, label: "Node.js (3+ yrs)" },
    { icon: Layers, label: "Laravel (2+ yrs)" },
  ];

  const showSkills = () => {
    return (
      <ul className="space-y-2 text-sm font-bold uppercase tracking-tight">
        {skills.map(({ icon: Icon, label }, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <Icon className="h-4 w-4" /> {label}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="home" className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none sm:leading-[0.85]"
            >
              {DATA.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 0 ? "block" : "block text-[var(--accent)] drop-shadow-[4px_4px_0px_var(--border)] sm:drop-shadow-[6px_6px_0px_var(--border)]"}>
                  {word}
                </span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-10 text-xl sm:text-2xl font-black font-mono border-l-8 border-[var(--accent-2)] pl-6 uppercase tracking-tighter max-w-2xl"
            >
              {DATA.tagline}
            </motion.p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Button href="#projects" className="text-lg sm:text-xl px-6 py-4 md:px-10 md:py-5" icon={ChevronRight}>
                View Projects
              </Button>
              <Button 
                onClick={() => (location.href = `mailto:${DATA.email}`)}
                className="bg-[var(--accent-3)] text-lg sm:text-xl px-6 py-4 md:px-10 md:py-5"
                icon={Mail}
              >
                 Contact
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card
              initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
              animate={{ rotate: -2, scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="p-6 md:p-10 bg-[var(--accent-2)]"
              textColor="#000000"
            >
              <div className="mb-8 flex items-center gap-4 font-black uppercase tracking-widest text-lg">
                <MapPin className="h-6 w-6" />
                <span>{DATA.location}</span>
              </div>

              <div className="bg-[var(--surface)] border-4 border-black p-6 mb-8 shadow-[8px_8px_0px_0px_var(--shadow-color)] text-[var(--text)]">
                {showSkills()}
              </div>

              <div className="flex gap-6">
                {DATA.socials.map((s) => (
                  <Button
                    key={s.label}
                    onClick={() => (location.href = s.href)}
                    aria-label={s.label}
                    bgColor="bg-[var(--surface)]"
                    className="p-4 w-16 h-16 justify-center !text-[var(--text)]"
                    icon={s.icon}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
