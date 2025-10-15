import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { experience } from "../data/resume.js";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience & Impact"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_70%)]"
    >
      <div className="pointer-events-none absolute inset-x-16 top-24 -z-10 h-56 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((role) => (
          <Card
            key={role.company}
            title={role.role}
            subtitle={role.company}
            meta={role.time}
            bullets={role.bullets}
          />
        ))}
      </div>
    </Section>
  );
}
