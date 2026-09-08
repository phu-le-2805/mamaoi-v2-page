import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Privacy } from "@/components/Privacy";
import { Support } from "@/components/Support";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = getDictionary(lang);

  return (
    <>
      <Header t={t} lang={lang} />
      <main>
        <Hero t={t} />
        <Features t={t} />
        <About t={t} />
        <Privacy t={t} />
        <Support t={t} lang={lang} />
        <Faq t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
