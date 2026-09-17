import { useLang } from '@/i18n'
import { useReveal } from '@/hooks/useReveal'
import { serviceIcons, ArrowUpRight } from '@/components/icons'

const serviceHrefs = [
  'https://gce.com.hk/services/gi',
  'https://gce.com.hk/projects/gi',
  'https://gce.com.hk/services/concrete',
  'https://gce.com.hk/services/soil_rock',
  'https://gce.com.hk/services/piling',
  'https://gce.com.hk/projects/structural_investigation',
  'https://gce.com.hk/services/cal_tmp',
]

export default function Services() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section id="services" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal kicker text-rust-600">{t.services.kicker}</p>
            <h2 className="reveal font-display mt-5 max-w-[20ch] text-[32px] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink-900 md:text-[44px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
              {t.services.heading}
            </h2>
          </div>
          <p className="reveal max-w-[38ch] text-[14px] leading-[1.8] text-ink-900/60" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
            {t.services.sub}
          </p>
        </div>

        {/* Ledger-style service rows */}
        <div className="mt-12 border-t border-ink-900/10 md:mt-16">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i]
            return (
              <a
                key={s.title}
                href={serviceHrefs[i]}
                target="_blank"
                rel="noreferrer"
                className="reveal group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink-900/10 py-6 transition-colors duration-300 hover:bg-paper md:grid-cols-[64px_56px_1fr_auto] md:gap-6 md:py-7"
                style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
              >
                <span className="font-mono text-[12px] tracking-[0.18em] text-ink-900/40 transition-colors group-hover:text-rust-600 max-md:hidden">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center text-ink-900 transition-all duration-300 group-hover:text-rust-600">
                  <Icon width={34} height={34} />
                </span>
                <span>
                  <span className="font-display block text-[18px] font-bold leading-snug text-ink-900 md:text-[21px]">
                    {s.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-[13.5px] leading-[1.75] text-ink-900/60">{s.desc}</span>
                  <span className="mt-3 hidden flex-wrap gap-2 md:flex">
                    {s.tags.map((tag) => (
                      <span key={tag} className="border border-ink-900/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-900/55">
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <ArrowUpRight
                  width={22}
                  height={22}
                  className="text-ink-900/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rust-600"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
