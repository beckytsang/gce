import { useLang } from '@/i18n'
import { useCountUp, useReveal } from '@/hooks/useReveal'
import { IconBadge } from '@/components/icons'

function Stat({ value, prefix = '', suffix = '', label, note, delay }: { value: number; prefix?: string; suffix?: string; label: string; note: string; delay: number }) {
  const { ref, value: v } = useCountUp(value)
  return (
    <div className="reveal border-l-2 border-rust-500/70 pl-5" style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}>
      <p className="font-display text-[46px] font-extrabold leading-none tracking-tight text-ink-900 md:text-[56px]">
        <span ref={ref}>
          {prefix}
          {v}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-[13.5px] font-semibold text-ink-900/85">{label}</p>
      <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900/45">{note}</p>
    </div>
  )
}

export default function WhyGCE() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section id="why" ref={ref} className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-8">
        <p className="reveal kicker text-rust-600">{t.why.kicker}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display max-w-[22ch] text-[32px] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink-900 md:text-[44px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
            {t.why.heading}
          </h2>
          <p className="reveal max-w-[46ch] text-[14px] leading-[1.85] text-ink-900/60" style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            {t.why.sub}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-y border-ink-900/10 py-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {t.why.stats.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 90} />
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Differentiators */}
          <div className="lg:col-span-5">
            <div className="space-y-0 border-t border-ink-900/10">
              {t.why.diffs.map((d, i) => (
                <div key={d.title} className="reveal group flex gap-4 border-b border-ink-900/10 py-5" style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}>
                  <IconBadge width={24} height={24} className="mt-0.5 shrink-0 text-rust-600" />
                  <div>
                    <h3 className="font-display text-[16.5px] font-bold text-ink-900">{d.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-[1.75] text-ink-900/60">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-7 lg:pl-8">
            <ol className="relative border-l border-ink-900/15 pl-0">
              {t.why.timeline.map((m, i) => (
                <li key={m.year} className="reveal group relative flex gap-5 pb-8 pl-8 last:pb-0" style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}>
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rotate-45 border border-rust-500 bg-paper transition-colors duration-300 group-hover:bg-rust-500" aria-hidden="true" />
                  <span className="font-display w-[86px] shrink-0 text-[17px] font-extrabold tracking-tight text-rust-600">{m.year}</span>
                  <span>
                    <span className="font-display block text-[15.5px] font-bold leading-snug text-ink-900">{m.title}</span>
                    <span className="mt-1 block max-w-[52ch] text-[13px] leading-[1.75] text-ink-900/60">{m.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
