import { clsx } from "clsx";

export function Card({ title, subtitle, meta, bullets = [], footer, className, children }) {
  return (
    <div
      className={clsx(
        "group rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-100 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          {title ? <h3 className="text-lg font-semibold text-slate-900">{title}</h3> : null}
          {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        {meta ? <span className="text-xs font-semibold uppercase tracking-wide text-ashish-500/80">{meta}</span> : null}
      </div>
      {children}
      {bullets.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {footer ? <div className="mt-4 flex flex-wrap gap-2">{footer}</div> : null}
    </div>
  );
}
