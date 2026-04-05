import Section from "./common/Section";
import { DATA } from "../constants";
import Card from "./common/Card";
import Button from "./common/Button";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl">
        <Card
          initial={{ rotate: -1 }}
          whileInView={{ rotate: 0 }}
          className="p-10 bg-[var(--accent-2)]"
        >
          <div className="mb-8 text-3xl font-black uppercase font-mono tracking-tighter decoration-double underline">
            Let's build something!
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {DATA.socials.map((s) => (
              <Button
                key={s.label}
                onClick={() => (location.href = s.href)}
                bgColor="bg-[var(--surface)]"
                className="text-lg py-4 w-full justify-center"
                icon={s.icon}
              >
                {s.label}
              </Button>
            ))}
          </div>
          <div className="mt-10 border-t-4 border-[var(--border)] pt-6 font-bold text-xl uppercase font-mono">
            Direct Email: <span className="text-[var(--accent-3)] break-all">{DATA.email}</span>
          </div>
        </Card>
      </div>
    </Section>
  );
}
