import { ArrowDownRight, ExternalLink, MapPin, Phone, Mail } from "lucide-react";
import { contact } from "../data/resume.js";
import { Pill } from "../components/Pill.jsx";

const highlights = [
  {
    label: "DevOps Intern",
    description: "Observability & Azure at CNH ITC",
  },
  {
    label: "Dual Degree",
    description: "Physics & Mechanical Engineering at BITS Pilani",
  },
  {
    label: "Focus",
    description: contact.focus,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-ashish-50 via-white to-white">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-ashish-200/50 blur-3xl" aria-hidden />
      <div className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 md:grid-cols-[1.2fr_1fr] md:py-28 lg:py-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm shadow-slate-100 backdrop-blur">
            <MapPin size={16} className="text-ashish-500" /> {contact.location} · {contact.focus}
          </div>
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Reliable systems, sharp insights & human-centred experiences.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              I’m {contact.name}. I design observability stacks, ship data-backed stories and build products that feel effortless.
              Explore my recent engagements, experiments and leadership journeys below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Pill
                label="View recent projects"
                icon={ArrowDownRight}
                href="#projects"
                className="bg-ashish-500 text-white shadow-glow hover:bg-ashish-700 hover:text-white"
              />
              <Pill label="Download resume" icon={ExternalLink} href={contact.resume} />
              <Pill label="Email Ashish" icon={Mail} href={`mailto:${contact.email}`} />
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm shadow-slate-100 backdrop-blur md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-ashish-500/80">{highlight.label}</p>
                <p className="text-sm text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-100 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ashish-500/80">Snapshot</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">DevOps · Data · Product</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              From Azure governance to GTM analytics, I stitch together reliable infrastructure and crisp narratives that help teams ship faster.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200/60 bg-slate-50/80 p-4">
            <h3 className="text-sm font-semibold text-slate-700">Quick links</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ashish-600">
                <ExternalLink size={16} /> LinkedIn profile
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ashish-600">
                <ExternalLink size={16} /> GitHub portfolio
              </a>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-ashish-600">
                <Phone size={16} /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-ashish-600">
                <Mail size={16} /> {contact.email}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-ashish-200/70 bg-gradient-to-br from-ashish-50 via-white to-white p-5 text-sm text-slate-600 shadow-inner">
            <p>
              "I enjoy combining measurable impact with delightful delivery. If you’re building across DevOps, analytics or product, let’s talk."
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
