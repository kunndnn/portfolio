import Section from './common/Section'
import { DATA } from "../constants";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="leading-relaxed opacity-90">
            I’m a pragmatic engineer who ships. I specialize in building
            robust backends, frictionless UIs, and automated workflows. I love
            clean abstractions, predictable deployments, and data‑driven product
            decisions.
          </p>
          <p className="mt-4 leading-relaxed opacity-90">
            Recently, I’ve focused on scalable real‑time systems, modern React patterns
            (hooks, Suspense, server components), and developer experience—DX that reduces
            cognitive load and makes teams faster.
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-2xl border p-4">
            <h3 className="mb-2 text-sm font-semibold tracking-wide">Highlights</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Built realtime chat apps</li>
              <li>Shipped dual CJS/ESM npm packages (Rollup)</li>
              <li>Build a webapp with some commonly used tools such as generating QR/Bar code, Image format conversion.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
