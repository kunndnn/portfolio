import Section from './common/Section'
import Card from "./common/Card";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-lg sm:text-xl font-bold leading-tight uppercase font-mono bg-[var(--accent-2)] text-black p-5 border-2 border-black shadow-[4px_4px_0px_0px_var(--border)] mb-6">
            I’m a Backend Developer with strong expertise in Node.js and Laravel, building secure, scalable, and high-performing applications.
          </p>
          <p className="leading-relaxed font-medium text-lg">
            My experience includes designing REST APIs, database architectures, authentication systems, and integrations, ensuring reliable backend solutions that power modern web applications.
          </p>
          <p className="mt-4 leading-relaxed font-medium text-lg">
            Alongside backend work, I have working knowledge of React.js and I’m actively improving my frontend skills to become a full-stack MERN developer (MongoDB, Express.js, React.js, Node.js).
            I also have hands-on experience with Python automation and web scraping.
          </p>
        </div>
        <div className="lg:col-span-1">
          <Card
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-5 sm:p-6 bg-[var(--accent-3)] text-black"
          >
            <h3 className="mb-4 text-xl font-black uppercase font-mono tracking-tighter decoration-double underline">Highlights</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              <li className="flex items-start gap-2"><span className="text-2xl leading-none">→</span> Built realtime chat apps</li>
              <li className="flex items-start gap-2"><span className="text-2xl leading-none">→</span> Shipped dual CJS/ESM npm packages</li>
              <li className="flex items-start gap-2"><span className="text-2xl leading-none">→</span> Build a WebApp with some commonly used tools</li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
