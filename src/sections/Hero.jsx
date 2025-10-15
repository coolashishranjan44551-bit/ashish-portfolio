import { ArrowDownRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Pill } from "../components/Pill.jsx";
import { contact } from "../data/resume.js";

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
  const portraitUrl = new URL(contact.image, import.meta.env.BASE_URL).href;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-28%] h-[420px] w-[420px] rounded-full bg-ashish-500/35 blur-3xl" aria-hidden="true" />
        <div className="absolute right-[-18%] top-[-10%] h-[360px] w-[360px] rounded-full bg-emerald-400/30 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-[-25%] left-[22%] h-[380px] w-[380px] rounded-full bg-sky-400/25 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_rgba(2,6,23,0))]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-28 lg:py-32">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200 shadow-[0_20px_60px_-25px_rgba(148,163,184,0.45)] backdrop-blur">
            <MapPin size={16} className="text-ashish-200" /> {contact.location} · {contact.focus}
          </div>

          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-ashish-100">
              {contact.tagline}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Reliable systems, sharp insights & human-centred experiences.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
              I’m {contact.name}. I design observability stacks, ship data-backed stories and build products that feel effortless.
              Explore my recent engagements, experiments and leadership journeys below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Pill
                label="View recent projects"
                icon={ArrowDownRight}
                href="#projects"
                className="bg-ashish-500/90 text-white hover:bg-ashish-500"
              />
              <Pill label="Download resume" icon={ExternalLink} href={contact.resume} />
              <Pill label="Email Ashish" icon={Mail} href={`mailto:${contact.email}`} />
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-night-800/70 p-6 shadow-[0_30px_100px_-50px_rgba(79,70,229,0.65)] backdrop-blur-lg md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-ashish-200/80">{highlight.label}</p>
                <p className="text-sm text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-night-800/80 p-6 shadow-[0_35px_120px_-40px_rgba(2,6,23,0.9)] backdrop-blur-xl">
          <figure className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={portraitUrl}
                alt={contact.imageAlt}
                className="h-64 w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-night-900/80 px-3 py-1 text-xs font-medium text-white shadow-lg">
              Ashish Ranjan
            </figcaption>
          </figure>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ashish-200/80">Snapshot</p>
            <p className="mt-3 text-lg font-semibold text-white">DevOps · Data · Product</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              From Azure governance to GTM analytics, I stitch together reliable infrastructure and crisp narratives that help teams ship faster.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-sm font-semibold text-white">Quick links</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-200">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ashish-200">
                <ExternalLink size={16} /> LinkedIn profile
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ashish-200">
                <ExternalLink size={16} /> GitHub portfolio
              </a>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-ashish-200">
                <Phone size={16} /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-ashish-200">
                <Mail size={16} /> {contact.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-ashish-500/10 to-transparent p-5 text-sm text-slate-200 shadow-inner">
            <p>
              "I enjoy combining measurable impact with delightful delivery. If you’re building across DevOps, analytics or product, let’s talk."
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
