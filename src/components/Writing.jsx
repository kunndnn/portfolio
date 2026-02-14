import Section from "./common/Section";
import { DATA } from "../constants";
import { motion } from "framer-motion";
export default function Writing() {
  const handleClick =(url)=>{
    location.href=url;
  }
  return (
    <Section id="writing" title="Writing">
      <div className="grid gap-4 md:grid-cols-3">
        {DATA.posts.map((post) => (
            <motion.div
              key={post.title}
              whileHover={{ y: -4 }}
              className="group relative border overflow-hidden rounded-2xl p-7 text-center cursor-pointer"
              onClick={()=>handleClick(post.href)}
            >
              <div className="text-xs opacity-70">{post.date}</div>
              <div className="mt-1 text-base font-semibold">{post.title}</div>
            </motion.div>
        ))}
      </div>
    </Section>
  );
}
