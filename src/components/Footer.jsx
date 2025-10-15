import { contact } from "../data/resume.js";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {contact.name}. Crafted with React & Tailwind.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#experience" className="hover:text-ashish-600">
            Experience
          </a>
          <a href="#projects" className="hover:text-ashish-600">
            Projects
          </a>
          <a href="#skills" className="hover:text-ashish-600">
            Skills
          </a>
          <a href="#contact" className="hover:text-ashish-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
