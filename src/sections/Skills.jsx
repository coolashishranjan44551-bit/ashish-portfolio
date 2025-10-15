import { Section } from "../components/Section.jsx";
import { skills } from "../data/resume.js";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills & Technologies"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_70%)]"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-3xl border border-white/10 bg-night-800/70 p-6 shadow-[0_20px_80px_-40px_rgba(79,70,229,0.65)] backdrop-blur"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ashish-200/90">
              {group === "core" ? "Core strengths" : group === "tools" ? "Tools" : "Business & GTM"}
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ashish-300" aria-hidden />
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
