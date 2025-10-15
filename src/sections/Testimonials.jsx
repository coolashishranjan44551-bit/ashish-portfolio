import { Section } from "../components/Section.jsx";
import { testimonials } from "../data/resume.js";

const sectionStyles =
  "relative overflow-hidden before:bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.16),_transparent_75%)]";
const testimonialCardStyles =
  "group relative overflow-hidden rounded-3xl border border-white/10 bg-night-800/70 p-6 text-sm text-slate-200 shadow-[0_30px_100px_-50px_rgba(79,70,229,0.65)] backdrop-blur";

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Social proof" title="What collaborators say" className={sectionStyles}>
      <div className="pointer-events-none absolute inset-12 -z-10 rounded-[3rem] border border-white/5" aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure key={`${testimonial.name}-${index}`} className={testimonialCardStyles}>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-br from-ashish-500/20 via-transparent to-emerald-400/15" />
            </div>
            <blockquote className="relative leading-relaxed text-slate-100">“{testimonial.quote}”</blockquote>
            <figcaption className="relative mt-4 text-xs font-semibold uppercase tracking-wide text-ashish-200/80">
              {testimonial.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
