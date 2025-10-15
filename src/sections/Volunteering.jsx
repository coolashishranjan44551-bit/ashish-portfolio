import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { volunteering } from "../data/resume.js";

export function Volunteering() {
  return (
    <Section
      id="volunteering"
      eyebrow="Community"
      title="Extra Curriculars & Volunteering"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.12),_transparent_70%)]"
    >
      <div className="pointer-events-none absolute inset-x-16 bottom-16 -z-10 h-48 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-2">
        {volunteering.map((item) => (
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
