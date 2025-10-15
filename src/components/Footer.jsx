import { contact } from "../data/resume.js";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-900/90 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {contact.name}. Crafted with React & Tailwind.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
