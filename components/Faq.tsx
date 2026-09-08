import type { Dictionary } from "@/lib/i18n";

export function Faq({ t }: { t: Dictionary }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.faq.title}
      </h2>

      <div className="mt-8 space-y-3">
        {t.faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-[var(--radius-card)] border border-line bg-card px-5 open:bg-surface/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold marker:hidden">
              {item.q}
              <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-5 text-[15px] leading-relaxed text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
