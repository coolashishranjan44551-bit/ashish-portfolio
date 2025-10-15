import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { leadership } from "../data/resume.js";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Beyond work"
      title="Positions of Responsibility"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.12),_transparent_70%)]"
    >
      <div className="pointer-events-none absolute right-16 top-24 -z-10 h-48 w-48 rounded-full bg-ashish-500/20 blur-3xl" aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-2">
        {leadership.map((item) => (
          <Card
            key={`${item.org}-${item.role}`}
            title={item.role}
            subtitle={item.org}
            meta={item.time}
            bullets={item.bullets}
          />
        ))}
      </div>
    </Section>
  );
}
