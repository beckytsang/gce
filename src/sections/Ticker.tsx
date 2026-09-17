import { useLang } from '@/i18n'

export default function Ticker() {
  const { t } = useLang()
  const row = [...t.ticker.clients, ...t.ticker.clients]
  return (
    <section className="marquee relative overflow-hidden border-y border-ink-900/10 bg-rust-500 py-3.5" aria-label={t.ticker.label}>
      <div className="marquee-track flex w-max items-center">
        {row.map((c, i) => (
          <span key={i} className="flex items-center whitespace-nowrap text-[13px] font-semibold tracking-wide text-white">
            <span className="px-5">{c}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-white/60" aria-hidden="true" />
          </span>
        ))}
      </div>
      <span className="sr-only">{t.ticker.label}</span>
    </section>
  )
}
