import { GraduationCap } from "lucide-react";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { education } from "../data/resume.js";

export function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card
            key={`${item.school}-${item.time}`}
            title={item.school}
            subtitle={item.degree}
            meta={item.time}
            bullets={item.bullets ?? []}
            footer={<span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-ashish-500/80"><GraduationCap size={16} /> {item.degree?.split(" · ")[0]}</span>}
          />
        ))}
      </div>
    </Section>
  );
}
