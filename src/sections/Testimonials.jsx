// src/sections/Testimonials.jsx
import { Section } from "../components/Section.jsx";
import { testimonials } from "../data/resume.js";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Social proof"
      title="What collaborators say"
      className="relative overflow-hidden bg-gradient-to-br from-ashish-500/10 via-white to-amber-50/40"
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-ashish-300/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={`${testimonial.name}-${index}`}
            className="rounded-3xl border border-ashish-100/80 bg-white/80 p-6 text-sm text-slate-600 shadow-sm shadow-slate-100 backdrop-blur transition hover:shadow-lg hover:shadow-ashish-100/50"
          >
            <blockquote className="leading-relaxed italic text-slate-700">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-ashish-600">
              {testimonial.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
