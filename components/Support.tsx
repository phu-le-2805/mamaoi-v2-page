import type { Dictionary } from "@/lib/i18n";
import { site, supportMailto, type Locale } from "@/lib/site";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line py-4 sm:grid sm:grid-cols-[170px_1fr] sm:gap-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1 text-[15px] font-medium sm:mt-0">{children}</dd>
    </div>
  );
}

/** Đây là phần dùng làm Support URL khi khai báo với App Store / Google Play. */
export function Support({ t, lang }: { t: Dictionary; lang: Locale }) {
  return (
    <section id="ho-tro" className="bg-surface/60 py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.support.title}
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">
          {t.support.lead}
        </p>

        <a
          href={supportMailto(t.support.mailSubject)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-ink"
        >
          ✉ {t.support.mailButton}
        </a>

        <dl className="mt-10">
          <Row label={t.support.emailLabel}>
            <a
              href={supportMailto(t.support.mailSubject)}
              className="text-primary-ink underline-offset-4 hover:underline"
            >
              {site.supportEmail}
            </a>
          </Row>
          <Row label={t.support.phoneLabel}>
            <a
              href={`tel:${site.supportPhone}`}
              className="text-primary-ink underline-offset-4 hover:underline"
            >
              {site.supportPhoneDisplay}
            </a>
          </Row>
          <Row label={t.support.publisherLabel}>{site.publisher}</Row>
          <Row label={t.support.addressLabel}>
            {lang === "vi" ? site.addressVi : site.addressEn}
          </Row>
          <Row label={t.support.hoursLabel}>{t.support.hours}</Row>
        </dl>
      </div>
    </section>
  );
}
