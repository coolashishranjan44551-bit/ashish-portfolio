import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { leadership } from "../data/resume.js";

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Beyond work" title="Positions of Responsibility">
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
