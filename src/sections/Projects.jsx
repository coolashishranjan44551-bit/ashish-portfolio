import { Github, ExternalLink } from "lucide-react";
import { Section } from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Pill } from "../components/Pill.jsx";
import { projects } from "../data/resume.js";

const monthIndex = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11,
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

const RANGE_DELIMITER = /[–—-]/;

function parseDatePart(part = "") {
  const value = part.trim();

  if (!value) {
    return null;
  }

  if (/present/i.test(value)) {
    return Number.MAX_SAFE_INTEGER;
  }

  const segments = value.split(/\s+/);

  if (segments.length === 0) {
    return null;
  }

  const maybeYear = segments[segments.length - 1];
  const yearNumber = Number.parseInt(maybeYear, 10);

  if (Number.isNaN(yearNumber)) {
    return null;
  }

  const maybeMonth = segments.slice(0, -1).join(" ").toLowerCase();
  const monthKey = maybeMonth.slice(0, 3);
  const month = monthIndex[maybeMonth] ?? monthIndex[monthKey] ?? 0;

  return new Date(yearNumber, month, 1).getTime();
}

function getSortTimestamp(range = "") {
  if (!range) {
    return 0;
  }

  const [rawStart, rawEnd] = range.split(RANGE_DELIMITER);
  const end = parseDatePart(rawEnd);

  if (end) {
    return end;
  }

  const start = parseDatePart(rawStart);
  return start ?? 0;
}

export function Projects() {
  const orderedProjects = [...projects].sort(
    (a, b) => getSortTimestamp(b.time) - getSortTimestamp(a.time),
  );

  return (
    <Section
      id="projects"
      eyebrow="Featured"
      title="Selected Projects"
      className="relative overflow-hidden before:bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_65%)]"
    >
      <div
        className="pointer-events-none absolute right-10 top-20 -z-10 h-48 w-48 rounded-full bg-ashish-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {orderedProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            subtitle={project.org}
            meta={project.time}
            bullets={project.bullets}
            footer={
              <>
                {project.stack?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
                {project.repo ? (
                  <Pill label="View repository" icon={Github} href={project.repo} />
                ) : null}
              </>
            }
          >
            {project.summary ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-200">{project.summary}</p>
            ) : null}
          </Card>
        ))}
      </div>
          <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-slate-200">
        <p className="font-semibold text-white">Want more?</p>
        <p className="mt-1">
          Explore deeper case studies, data notebooks and design experiments on my
          {" "}
          <a
            href="https://github.com/coolashishranjan44551-bit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-ashish-200 hover:text-white"
          >
            GitHub <ExternalLink size={14} />
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
