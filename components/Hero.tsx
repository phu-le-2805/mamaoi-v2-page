import type { Dictionary } from "@/lib/i18n";
import { supportMailto } from "@/lib/site";
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_auto] lg:items-center lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-medium text-primary-ink ring-1 ring-primary-soft/50">
            <span className="size-1.5 rounded-full bg-primary" />
            {t.hero.badge}
          </p>

          <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-3 text-xl font-medium text-primary-ink sm:text-2xl">
            {t.hero.subtitle}
          </p>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={supportMailto(t.support.mailSubject)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-ink"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#tinh-nang"
              className="rounded-full px-5 py-3 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {t.hero.secondaryCta} →
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup t={t} />
        </div>
      </div>
    </section>
  );
}
