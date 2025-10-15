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
      className="bg-gradient-to-br from-white via-ashish-50/60 to-emerald-50/40"
    >
    <Section id="contact" eyebrow="Say hello" title="Let’s build something together">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 rounded-3xl border border-ashish-100/70 bg-white/80 p-6 shadow-sm shadow-slate-100 backdrop-blur">
          <p className="text-lg font-medium text-slate-800">
            Whether it’s scaling infrastructure, unlocking retention insights, or crafting GTM experiments, I’d love to jam.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Share a quick note about the challenge you’re tackling. I typically reply within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Pill label={contact.email} icon={Mail} href={`mailto:${contact.email}`} />
            <Pill label={contact.phone} icon={Phone} href={`tel:${contact.phone}`} />
            <Pill label="LinkedIn" icon={Linkedin} href={contact.linkedin} />
            <Pill label="GitHub" icon={Github} href={contact.github} />
          </div>
        </div>
        <div className="rounded-3xl border border-dashed border-ashish-200/70 bg-ashish-50/50 p-6 text-sm leading-relaxed text-slate-600">
          <p className="font-semibold text-ashish-700">Ideas to explore together</p>
          <ul className="mt-3 space-y-2">
            <li>• Observability dashboards & Azure governance playbooks</li>
            <li>• Customer funnel analytics & retention experiments</li>
            <li>• Data storytelling, documentation & enablement assets</li>
          </ul>
          <p className="mt-4">
            I also mentor students breaking into analytics, product & creative tech — happy to help with portfolios and interview practice.
          </p>
        </div>
      </div>
    </Section>
  );
}
