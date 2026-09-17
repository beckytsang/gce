import { useLang } from '@/i18n'
import { useReveal } from '@/hooks/useReveal'
import { Logo, IconPhone, IconMail, IconClock, IconPin, ArrowRight } from '@/components/icons'
import { im } from '../lib/img';

export default function CtaFooter() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  const contactTiles = [
    { icon: IconPhone, label: t.cta.call, value: '(852) 2365-9123', href: 'tel:+85223659123' },
    { icon: IconMail, label: t.cta.email, value: 'gce@gce.com.hk', href: 'mailto:gce@gce.com.hk' },
    { icon: IconClock, label: t.cta.hours, value: t.cta.hoursValue },
    { icon: IconPin, label: t.cta.office, value: t.cta.officeValue },
  ]

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-ink-900 text-white">
      {/* CTA */}
      <div className="relative">
        <img src={im("/images/derrick-barge.jpg")} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[0.16]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/85" />
        <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1360px] px-5 py-20 md:px-8 md:py-28">
          <p className="reveal kicker text-rust-400">{t.cta.kicker}</p>
          <div className="mt-5 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="reveal font-display max-w-[16ch] text-[34px] font-extrabold leading-[1.1] tracking-[-0.015em] md:text-[52px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
                {t.cta.heading}
              </h2>
              <p className="reveal mt-6 max-w-[48ch] text-[15px] leading-[1.85] text-white/70" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
                {t.cta.sub}
              </p>
              <a
                href="mailto:gce@gce.com.hk"
                className="reveal mt-9 inline-flex items-center gap-3 bg-rust-500 px-7 py-4 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-rust-400"
                style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
              >
                {t.cta.button}
                <ArrowRight width={17} height={17} />
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                {contactTiles.map((c, i) => {
                  const Icon = c.icon
                  const inner = (
                    <>
                      <Icon width={20} height={20} className="text-rust-400" />
                      <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{c.label}</span>
                      <span className="mt-1.5 block text-[13.5px] font-semibold leading-snug text-white">{c.value}</span>
                    </>
                  )
                  const cls = 'reveal block bg-ink-950 p-5 transition-colors duration-300'
                  const style = { '--reveal-delay': `${120 + i * 70}ms` } as React.CSSProperties
                  return c.href ? (
                    <a key={c.label} href={c.href} className={`${cls} hover:bg-ink-900`} style={style}>
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label} className={cls} style={style}>
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1360px] px-5 py-14 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Logo inverted />
              <p className="mt-5 max-w-[34ch] text-[13px] leading-[1.8] text-white/60">{t.footer.tagline}</p>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-rust-400/90">{t.footer.since}</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {t.footer.branches.map(([name, addr]) => (
                  <div key={name} className="border-l border-white/10 pl-4">
                    <p className="text-[13px] font-semibold text-white/80">{name}</p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.7] text-white/50">{addr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-[12px] text-white/50">{t.footer.rights}</p>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/40">GCE · EST. 1976 · 50TH ANNIVERSARY</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
