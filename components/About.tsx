import type { Dictionary } from "@/lib/i18n";

export function About({ t }: { t: Dictionary }) {
  return (
    <section className="bg-surface/60 py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.about.title}
        </h2>

        <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/70">
          {t.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <blockquote className="mt-10 border-t border-line pt-8 text-xl font-medium italic leading-relaxed text-primary-ink sm:text-2xl">
          “{t.about.quote}”
        </blockquote>
      </div>
    </section>
  );
}
