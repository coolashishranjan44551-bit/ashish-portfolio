import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { experience } from "../data/resume.js";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience & Impact">
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
