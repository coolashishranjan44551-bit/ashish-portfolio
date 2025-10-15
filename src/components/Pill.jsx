import { clsx } from "clsx";

export function Pill({ icon: Icon, label, href, className }) {
  const content = (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:shadow-glow",
        className,
      )}
    >
      {Icon ? <Icon size={16} className="text-ashish-500" /> : null}
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
