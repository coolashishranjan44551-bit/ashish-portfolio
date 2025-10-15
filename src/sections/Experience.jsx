// src/sections/Experience.jsx
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { experience } from "../data/resume.js";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Work"
      title="Experience"
      className="relative overflow-hidden bg-gradient-to-br from-ashish-50 via-white to-teal-50"
    >
      {/* decorative blobs */}
      <div
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-ashish-300/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-300/25 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-6 md:grid-cols-2">
        {experience.map((item) => (
          <div
            key={`${(item.company || item.org || "org")}-${item.role}`}
            className="group relative rounded-2xl p-[1px] transition-shadow duration-300
                       bg-gradient-to-br from-ashish-300/60 via-amber-300/40 to-teal-300/60
                       hover:shadow-xl hover:shadow-ashish-200/40"
          >
            <div className="rounded-2xl bg-white/80 p-5 backdrop-blur-md">
              <Card
                title={item.role}
                subtitle={item.company || item.org}
                meta={item.time}
                bullets={item.bullets}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
