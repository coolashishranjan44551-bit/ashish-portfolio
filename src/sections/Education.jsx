import { GraduationCap } from "lucide-react";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { education } from "../data/resume.js";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academics"
      title="Education"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_bottom,_rgba(251,191,36,0.12),_transparent_70%)]"
    >
      <div className="pointer-events-none absolute left-10 top-16 -z-10 h-40 w-40 rounded-full bg-ashish-500/20 blur-3xl" aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card
            key={`${item.school}-${item.time}`}
            title={item.school}
            subtitle={item.degree}
            meta={item.time}
            bullets={item.bullets ?? []}
            footer={
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-ashish-200/90">
                <GraduationCap size={16} /> {item.degree?.split(" · ")[0]}
              </span>
            }
          />
        ))}
      </div>
    </Section>
  );
}
