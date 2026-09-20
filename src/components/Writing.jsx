import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Writing() {
  return (
    <Section id="writing" title="Writing">
      <motion.div
        className="divide-y divide-[var(--border)]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          animate: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {DATA.posts.map((post) => (
          <motion.a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="group flex items-start justify-between gap-4 py-5 transition-colors"
          >
            <div className="min-w-0">
              <span className="text-xs font-medium text-[var(--text-muted)]">
                {post.date}
              </span>
              <h3 className="mt-1 text-base font-semibold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
