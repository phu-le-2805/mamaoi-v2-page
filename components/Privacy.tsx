import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Privacy({ t }: { t: Dictionary }) {
  return (
    <section id="rieng-tu" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="rounded-[var(--radius-block)] border border-line bg-card p-8 sm:p-12">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          {t.privacy.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
          {t.privacy.lead}
        </p>

        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          {t.privacy.points.map((point) => (
            <div key={point.title}>
              <dt className="flex items-center gap-2 text-lg font-bold">
                <span className="grid size-6 place-items-center rounded-full bg-tone-green text-xs">
                  ✓
                </span>
                {point.title}
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted">
                {point.desc}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={site.privacyPolicyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-ink"
        >
          {t.privacy.cta} →
        </a>
      </div>
    </section>
  );
}
