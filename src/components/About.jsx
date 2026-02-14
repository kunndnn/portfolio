import Section from './common/Section'
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="leading-relaxed opacity-90">
            I’m a Backend Developer with strong expertise in Node.js and Laravel, building secure, scalable, and high-performing applications. My experience includes designing REST APIs, database architectures, authentication systems, and integrations, ensuring reliable backend solutions that power modern web applications.
          </p>
          <p className="mt-4 leading-relaxed opacity-90">
            Alongside backend work, I have working knowledge of React.js and I’m actively improving my frontend skills to become a full-stack MERN developer (MongoDB, Express.js, React.js, Node.js).
            I also have hands-on experience with Python automation and web scraping.
          </p>
        </div>
        <div className="md:col-span-1">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl border p-4"
          >
            <h3 className="mb-2 text-sm font-semibold tracking-wide">Highlights</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Built realtime chat apps</li>
              <li>Shipped dual CJS/ESM npm packages (Rollup)</li>
              <li>Build a WebApp with some commonly used tools such as generating QR/Bar code, Image format conversion.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
