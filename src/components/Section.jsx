import { forwardRef } from "react";
import { clsx } from "clsx";

export const Section = forwardRef(({ id, title, eyebrow, className, children }, ref) => (
  <section id={id} ref={ref} className={clsx("py-16 md:py-20", className)}>
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-ashish-500/80">{eyebrow}</span>
      ) : null}
      {title ? (
        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      ) : null}
      {children}
    </div>
  </section>
));

Section.displayName = "Section";
