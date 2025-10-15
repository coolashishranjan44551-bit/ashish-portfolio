import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { volunteering } from "../data/resume.js";

export function Volunteering() {
  return (
    <Section
      id="volunteering"
      eyebrow="Community"
      title="Extra Curriculars & Volunteering"
      className="bg-gradient-to-br from-white via-teal-50/50 to-white"
    >
    <Section id="volunteering" eyebrow="Community" title="Extra Curriculars & Volunteering" className="bg-white/80">
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
