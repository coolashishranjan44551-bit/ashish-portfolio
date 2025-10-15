import { clsx } from "clsx";

export function Card({ title, subtitle, meta, bullets = [], footer, className, children }) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-night-800/60 p-6 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.95)] backdrop-blur transition hover:-translate-y-1 hover:shadow-glow-strong",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-ashish-500/35 via-transparent to-emerald-400/25" />
      </div>

      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          {title ? <h3 className="text-lg font-semibold text-white">{title}</h3> : null}
          {subtitle ? <p className="text-sm text-slate-300">{subtitle}</p> : null}
        </div>
        {meta ? <span className="text-xs font-semibold uppercase tracking-wide text-ashish-200/80">{meta}</span> : null}
      </div>
      <div className="relative text-slate-200">{children}</div>
      {bullets.length ? (
        <ul className="relative mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {footer ? <div className="relative mt-4 flex flex-wrap gap-2">{footer}</div> : null}
    </div>
  );
}
