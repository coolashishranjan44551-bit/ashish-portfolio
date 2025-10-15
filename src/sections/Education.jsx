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
      className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/50 to-white"
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-ashish-100/30 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card
            key={`${item.school}-${item.time}`}
            title={item.school}
            subtitle={item.degree}
            meta={item.time}
            bullets={item.bullets ?? []}
            footer={
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-ashish-500/80">
                <GraduationCap size={16} />
                {item.degree?.split(" · ")[0]}
              </span>
            }
          />
        ))}
      </div>
    </Section>
  );
}
