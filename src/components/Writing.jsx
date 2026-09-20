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
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
        className="space-y-0"
      >
        {DATA.posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="group flex items-center justify-between gap-4 border-b border-[var(--border)] py-5 transition-colors"
          >
            <div className="flex items-baseline gap-4 min-w-0">
              <span className="text-xs font-medium text-[var(--text-muted)] tabular-nums shrink-0 w-16">
                {post.date}
              </span>
              <h3 className="text-base font-semibold tracking-tight truncate group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
