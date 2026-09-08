import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { otherLocale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import { site, type Locale } from "@/lib/site";

export function Header({ t, lang }: { t: Dictionary; lang: Locale }) {
  const other = otherLocale(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-2.5">
          <BrandMark />
          <span className="text-[15px] font-semibold tracking-tight">
            {site.appName}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#tinh-nang" className="transition-colors hover:text-ink">
            {t.nav.features}
          </a>
          <a href="#rieng-tu" className="transition-colors hover:text-ink">
            {t.nav.privacy}
          </a>
          <a href="#ho-tro" className="transition-colors hover:text-ink">
            {t.nav.support}
          </a>
        </nav>

        <Link
          href={`/${other}`}
          title={t.nav.otherLocaleTitle}
          className="ml-auto rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary-soft hover:text-primary-ink md:ml-0"
        >
          {t.nav.otherLocaleLabel}
        </Link>
      </div>
    </header>
  );
}
