import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";
export default function Writing() {
  return (
    <Section id="writing" title="Writing">
      <div className="grid gap-4 md:grid-cols-2">
        {DATA.posts.map((post) => (
          <span key={post.href}
            onClick={() => window.open(post.href, "_blank")}
            className="rounded-2xl border hover:shadow-sm cursor-pointer">
            <motion.div
              key={post.title}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl p-4"
            >
              <div className="text-xs opacity-70">{post.date}</div>
              <div className="mt-1 text-base font-semibold">{post.title}</div>
            </motion.div>
          </span>
        ))}
      </div>
    </Section>
  );
}
