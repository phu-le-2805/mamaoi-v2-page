import type { Dictionary } from "@/lib/i18n";

const TONES = [
  "bg-tone-pink",
  "bg-tone-green",
  "bg-tone-blue",
  "bg-tone-purple",
  "bg-tone-cream",
  "bg-tone-peach",
] as const;

/**
 * Dựng lại màn "Hôm nay" theo OPTION 3.pdf bằng HTML/CSS — sắc nét ở mọi
 * mật độ điểm ảnh và đổi ngôn ngữ theo dictionary. Thay bằng ảnh chụp màn
 * hình thật khi có, chỉ cần đổi component này.
 */
export function PhoneMockup({ t }: { t: Dictionary }) {
  const m = t.mockup;

  return (
    <div
      role="img"
      aria-label={`${t.hero.title} — ${m.diaryTitle}`}
      className="w-[300px] shrink-0 select-none overflow-hidden rounded-[42px] border-[6px] border-white bg-white shadow-[0_30px_70px_-25px_rgba(46,42,43,0.35)] ring-1 ring-line"
    >
      {/* status bar + header hồng nhạt */}
      <div className="bg-surface px-5 pt-3 pb-4">
        <div className="flex items-center justify-between text-[11px] font-semibold">
          <span>{m.time}</span>
          <span className="flex items-center gap-1 text-ink/70">
            <span className="inline-block h-2 w-3.5 rounded-[2px] bg-ink/70" />
            <span className="inline-block h-2 w-2.5 rounded-[2px] bg-ink/70" />
            <span className="inline-block h-2.5 w-5 rounded-[3px] border border-ink/70" />
          </span>
        </div>

        <div className="mt-3 flex items-start justify-between">
          <div>
            <p className="text-[15px] font-bold leading-tight">{m.greeting}</p>
            <p className="text-[12px] text-muted">{m.momName}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative grid size-7 place-items-center rounded-full bg-white">
              <span className="text-[11px]">🔔</span>
              <span className="absolute -right-0.5 -top-0.5 grid size-3.5 place-items-center rounded-full bg-primary text-[7px] font-bold text-white">
                3
              </span>
            </span>
            <span className="grid size-7 place-items-center rounded-full bg-tone-peach text-[12px]">
              👩
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-white/70 py-1.5 text-[11px]">
          <span className="font-semibold">{m.babyName}</span>
          <span className="text-primary">•</span>
          <span className="text-primary">{m.babyAge}</span>
          <span className="text-muted">⌄</span>
        </div>
      </div>

      <div className="space-y-2.5 bg-bg px-3 pb-3 pt-3">
        {/* nhật ký hôm nay */}
        <div className="rounded-[var(--radius-card)] bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[13px] font-bold">
              <span className="h-4 w-[3px] rounded-full bg-primary" />
              {m.diaryTitle}
            </span>
            <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] text-primary-ink">
              {m.detail} →
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {m.timeline.map((item) => (
              <div key={item.title}>
                <p className="mb-1 text-[10px] text-muted">{item.time}</p>
                <div className="flex items-center justify-between gap-1 rounded-xl bg-bg px-2 py-1.5">
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-semibold">
                      {item.title}
                    </span>
                    <span className="block truncate text-[9px] text-muted">
                      {item.note}
                    </span>
                  </span>
                  <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-tone-purple text-[10px]">
                    {item.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* lưới 6 card pastel */}
        <div className="grid grid-cols-2 gap-2.5">
          {m.cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-[var(--radius-card)] ${TONES[i % TONES.length]} p-3`}
            >
              <span className="grid size-7 place-items-center rounded-full bg-white/80 text-[12px]">
                {card.icon}
              </span>
              <p className="mt-2 text-[12px] font-bold">{card.title}</p>
              <p className="truncate text-[9px] text-ink/55">{card.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* tab bar */}
      <div className="flex items-center justify-between gap-0.5 rounded-t-[24px] bg-white px-2 pb-3 pt-2 shadow-[0_-6px_20px_-12px_rgba(46,42,43,0.3)]">
        {m.tabs.map((tab, i) => (
          <span
            key={tab}
            className={
              i === 0
                ? "flex flex-col items-center gap-0.5 rounded-full bg-primary px-2.5 py-1.5 text-[8px] font-semibold text-white"
                : "flex flex-col items-center gap-0.5 px-1 py-1.5 text-[8px] text-muted"
            }
          >
            <span className="text-[11px]">
              {["📅", "📈", "⚡", "♡", "👤"][i]}
            </span>
            {tab}
          </span>
        ))}
      </div>

      <div className="flex justify-center bg-white pb-2">
        <span className="h-1 w-24 rounded-full bg-ink/70" />
      </div>
    </div>
  );
}
