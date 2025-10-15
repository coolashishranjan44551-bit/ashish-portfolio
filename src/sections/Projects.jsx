// src/sections/Projects.jsx
import { Github, ExternalLink } from "lucide-react";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Pill } from "../components/Pill.jsx";
import { projects } from "../data/resume.js";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured"
      title="Selected Projects"
      className="relative overflow-hidden bg-gradient-to-br from-ashish-50/80 via-white to-sky-50/60"
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-ashish-100/30 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            subtitle={project.org}
            meta={project.time}
            bullets={project.bullets}
            footer={
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {project.stack?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
                {project.repo && (
                  <Pill label="View repository" icon={Github} href={project.repo} />
                )}
              </div>
            }
          >
            {project.summary && (
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {project.summary}
              </p>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-dashed border-ashish-200/80 bg-ashish-50/40 p-6 text-sm text-slate-600">
        <p className="font-semibold text-ashish-700">Want more?</p>
        <p className="mt-1">
          Explore deeper case studies, data notebooks and design experiments on my{" "}
          <a
            href="https://github.com/coolashishranjan44551-bit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-ashish-600 hover:text-ashish-700"
          >
            GitHub <ExternalLink size={14} />
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
