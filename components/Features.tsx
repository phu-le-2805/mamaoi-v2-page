import type { Dictionary } from "@/lib/i18n";

const TONES = [
  "bg-tone-pink",
  "bg-tone-green",
  "bg-tone-blue",
  "bg-tone-purple",
  "bg-tone-cream",
  "bg-tone-peach",
] as const;

export function Features({ t }: { t: Dictionary }) {
  return (
    <section id="tinh-nang" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        {t.features.title}
      </h2>
      <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
        {t.features.lead}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((item, i) => (
          <article
            key={item.title}
            className={`rounded-[var(--radius-block)] ${TONES[i % TONES.length]} p-6`}
          >
            <span className="grid size-11 place-items-center rounded-full bg-white/75 text-xl">
              {item.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
              {item.desc}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {t.features.wide.map((item) => (
          <article
            key={item.title}
            className="rounded-[var(--radius-block)] border border-line bg-card p-6 sm:p-8"
          >
            <span className="grid size-11 place-items-center rounded-full bg-surface text-xl">
              {item.icon}
            </span>
            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
