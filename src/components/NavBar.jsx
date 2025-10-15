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
          className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
          {link.label}
        </a>
      )),
    []
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-slate-900">
          {contact.name}
        </a>
        <nav className="hidden items-center gap-1 lg:flex">{menuLinks}</nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-ashish-500/60 hover:text-ashish-600"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-ashish-500/60 hover:text-ashish-600"
          >
            <Linkedin size={16} /> Connect
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-ashish-500/60 hover:text-ashish-600"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:text-slate-900 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={clsx(
          "lg:hidden",
          open
            ? "grid gap-2 border-t border-slate-200/80 bg-white/95 px-4 pb-6 shadow-lg"
            : "pointer-events-none h-0 overflow-hidden opacity-0"
        )}
      >
        {open ? (
          <div className="flex flex-col gap-2 py-4">
            {menuLinks}
            <div className="mt-2 flex flex-wrap gap-2">
              <a href={`mailto:${contact.email}`} className="text-sm text-ashish-600">
                <Mail size={16} className="mr-1 inline" /> {contact.email}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-sm text-ashish-600">
                <Linkedin size={16} className="mr-1 inline" /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="text-sm text-ashish-600">
                <Github size={16} className="mr-1 inline" /> GitHub
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
