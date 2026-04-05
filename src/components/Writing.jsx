import Section from "./common/Section";
import { DATA } from "../constants";
import Card from "./common/Card";

export default function Writing() {
  const handleClick =(url)=>{
    location.href=url;
  }
  return (
    <Section id="writing" title="Writing">
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {DATA.posts.map((post) => (
          <Card
            key={post.title}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="p-8 cursor-pointer bg-[var(--surface)] group flex flex-col items-center text-center"
            onClick={() => handleClick(post.href)}
          >
            <div className="brutalist-badge bg-[var(--accent-3)] mb-4 text-xs font-mono">
              {post.date}
            </div>
            <h3 className="text-xl font-black uppercase font-mono tracking-tighter group-hover:underline decoration-4">
              {post.title}
            </h3>
            <div className="mt-6 text-sm font-bold uppercase tracking-widest opacity-60">
              Read Post ↗
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
