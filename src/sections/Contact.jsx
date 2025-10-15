import { Section } from "../components/Section.jsx";
import { contact } from "../data/resume.js";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Pill } from "../components/Pill.jsx";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Say hello"
      title="Let’s build something together"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.18),_transparent_75%)]"
    >
      <div className="pointer-events-none absolute inset-x-12 top-16 -z-10 h-60 rounded-full bg-ashish-500/20 blur-3xl" aria-hidden="true" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-night-800/80 p-6 shadow-[0_35px_120px_-40px_rgba(2,6,23,0.9)] backdrop-blur">
          <p className="text-lg font-medium text-white">
            Whether it’s scaling infrastructure, unlocking retention insights, or crafting GTM experiments, I’d love to jam.
          </p>
          <p className="text-sm leading-relaxed text-slate-200">
            Share a quick note about the challenge you’re tackling. I typically reply within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Pill label={contact.email} icon={Mail} href={`mailto:${contact.email}`} />
            <Pill label={contact.phone} icon={Phone} href={`tel:${contact.phone}`} />
            <Pill label="LinkedIn" icon={Linkedin} href={contact.linkedin} />
            <Pill label="GitHub" icon={Github} href={contact.github} />
          </div>
        </div>
        <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-sm leading-relaxed text-slate-200">
          <p className="font-semibold text-white">Ideas to explore together</p>
          <ul className="mt-3 space-y-2 text-slate-100/80">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ashish-300" aria-hidden /> Observability dashboards & Azure governance playbooks
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ashish-300" aria-hidden /> Customer funnel analytics & retention experiments
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ashish-300" aria-hidden /> Data storytelling, documentation & enablement assets
            </li>
          </ul>
          <p className="mt-4">
            I also mentor students breaking into analytics, product & creative tech — happy to help with portfolios and interview practice.
          </p>
        </div>
      </div>
    </Section>
  );
}
