import Section from "./common/Section";
import { DATA } from "../constants";
import Button from "./common/Button";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-2xl"
      >
        <motion.h3
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Let&apos;s build something{" "}
          <span className="text-[var(--accent)]">together.</span>
        </motion.h3>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-4 text-[var(--text-muted)] leading-relaxed max-w-md"
        >
          Have a project, opportunity, or interesting problem to discuss?
          I&apos;m always open to new conversations.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button onClick={() => (location.href = `mailto:${DATA.email}`)}>
            Email Me
          </Button>
          {DATA.socials
            .filter((s) => s.label !== "Mail")
            .map((s) => (
              <Button key={s.label} href={s.href} variant="secondary" icon={s.icon}>
                {s.label}
              </Button>
            ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
