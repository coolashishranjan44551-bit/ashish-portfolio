import { Section } from "../components/Section.jsx";
import { testimonials } from "../data/resume.js";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Social proof"
      title="What collaborators say"
      className="bg-gradient-to-br from-ashish-500/10 via-white to-amber-50/40"
      className="bg-gradient-to-br from-white via-ashish-50/60 to-white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={`${testimonial.name}-${index}`}
            className="rounded-3xl border border-ashish-100/80 bg-white/80 p-6 text-sm text-slate-600 shadow-sm shadow-slate-100 backdrop-blur"
          >
            <blockquote className="leading-relaxed">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-ashish-600">
              {testimonial.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
