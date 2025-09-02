import Section from "./common/Section";
import { DATA } from "../constants";

export default function Writing() {
  return (
    <Section id="writing" title="Writing">
      <div className="grid gap-4 md:grid-cols-2">
        {DATA.posts.map((post) => (
          <a key={post.href} href={post.href} className="rounded-2xl border p-4 hover:shadow-sm">
            <div className="text-xs opacity-70">{post.date}</div>
            <div className="mt-1 text-base font-semibold">{post.title}</div>
          </a>
        ))}
      </div>
    </Section>
  );
}