import { clsx } from "clsx";

export function Pill({ icon: Icon, label, href, className }) {
  const content = (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.8)] transition hover:-translate-y-0.5 hover:border-ashish-500/60 hover:bg-ashish-500/20",
        className,
      )}
    >
      {Icon ? <Icon size={16} className="text-ashish-200" /> : null}
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-flex">
        {content}
      </a>
    );
  }

  return content;
}
