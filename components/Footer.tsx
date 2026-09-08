import type { Dictionary } from "@/lib/i18n";
import { BrandMark } from "@/components/BrandMark";
import { site, supportMailto } from "@/lib/site";

export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-semibold">{site.appName}</span>
          </div>
          <p className="mt-3 text-sm text-muted">{t.footer.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm">
          <a
            href={site.privacyPolicyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            {t.footer.privacy}
          </a>
          <a href="#ho-tro" className="text-muted transition-colors hover:text-ink">
            {t.footer.support}
          </a>
          <a
            href={supportMailto(t.support.mailSubject)}
            className="text-muted transition-colors hover:text-ink"
          >
            {site.supportEmail}
          </a>
        </nav>
      </div>

      <div className="border-t border-line px-5 py-5 text-center text-xs text-muted sm:px-8">
        {t.footer.rights}
      </div>
    </footer>
  );
}
