import { useState, useMemo } from "react";
import { Menu, X, Mail, Linkedin, Github } from "lucide-react";
import { contact } from "../data/resume.js";
import { clsx } from "clsx";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "POR" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const menuLinks = useMemo(
    () =>
      links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
        >
          {link.label}
        </a>
      )),
    []
  );

  return (
    <header className="sticky top-0 z-40 px-4 pb-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_0_45px_rgba(99,102,241,0.25)] backdrop-blur-xl">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
            {contact.name}
          </a>
          <nav className="hidden items-center gap-1 lg:flex">{menuLinks}</nav>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-ashish-500/60 hover:bg-ashish-500/10"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-ashish-500/60 hover:bg-ashish-500/10"
            >
              <Linkedin size={16} /> Connect
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-ashish-500/60 hover:bg-ashish-500/10"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-slate-100 transition hover:border-ashish-500/60 hover:text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "lg:hidden",
          open
            ? "mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-night-800/80 px-4 pb-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.85)] backdrop-blur"
            : "pointer-events-none h-0 overflow-hidden opacity-0"
        )}
      >
        {open ? (
          <div className="flex flex-col gap-2 py-4 text-slate-100">
            {menuLinks}
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <Mail size={16} /> {contact.email}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
