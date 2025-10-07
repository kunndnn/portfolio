import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";
export default function Writing() {
  return (
    <Section id="writing" title="Writing">
      <div className="grid gap-4 md:grid-cols-3">
        {DATA.posts.map((post) => (
            <motion.div
              key={post.title}
              whileHover={{ y: -4 }}
              className="group relative border overflow-hidden rounded-2xl p-7 text-center"
            >
              <div className="text-xs opacity-70">{post.date}</div>
              <div className="mt-1 text-base font-semibold">{post.title}</div>
            </motion.div>
        ))}
      </div>
    </Section>
  );
}
