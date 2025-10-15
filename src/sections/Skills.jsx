import { Section } from "../components/Section.jsx";
import { skills } from "../data/resume.js";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills & Technologies"
      className="bg-gradient-to-br from-white via-ashish-50/50 to-indigo-50/40"
    >
    <Section id="skills" eyebrow="Toolkit" title="Skills & Technologies" className="bg-white/70">
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-100 backdrop-blur"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ashish-600">
              {group === "core" ? "Core strengths" : group === "tools" ? "Tools" : "Business & GTM"}
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ashish-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
