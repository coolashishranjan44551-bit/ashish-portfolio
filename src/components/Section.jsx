import { forwardRef } from "react";
import { clsx } from "clsx";

export const Section = forwardRef(({ id, title, eyebrow, className, children }, ref) => (
  <section
    id={id}
    ref={ref}
    className={clsx(
      "relative py-20 md:py-24",
      "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-white/5 before:via-white/0 before:to-emerald-500/5",
      className,
    )}
  >
    <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 text-slate-200">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-ashish-200/80">{eyebrow}</span>
      ) : null}
      {title ? (
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      ) : null}
      {children}
    </div>
  </section>
));

Section.displayName = "Section";
