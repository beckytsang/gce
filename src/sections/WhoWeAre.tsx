import { useLang } from '@/i18n'
import { useReveal } from '@/hooks/useReveal'
import { ArrowUpRight } from '@/components/icons'
import { im } from '../lib/img';

export default function WhoWeAre() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-6 lg:pr-10">
          <p className="reveal kicker text-rust-600">{t.about.kicker}</p>
          <h2 className="reveal font-display mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink-900 md:text-[44px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
            {t.about.heading}
          </h2>
          <p className="reveal mt-7 text-[15px] leading-[1.9] text-ink-900/75" style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            {t.about.p1}
          </p>
          <p className="reveal mt-4 text-[15px] leading-[1.9] text-ink-900/75" style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
            {t.about.p2}
          </p>
          <p className="reveal mt-4 text-[15px] leading-[1.9] text-ink-900/75" style={{ '--reveal-delay': '260ms' } as React.CSSProperties}>
            {t.about.p3}
          </p>

          <div className="reveal mt-9 grid grid-cols-2 border-l border-t border-ink-900/10 sm:grid-cols-4" style={{ '--reveal-delay': '320ms' } as React.CSSProperties}>
            {t.about.points.map(([v, l]) => (
              <div key={l} className="border-b border-r border-ink-900/10 px-4 py-4">
                <p className="font-display text-[22px] font-extrabold text-rust-600">{v}</p>
                <p className="mt-1 text-[11.5px] leading-snug tracking-wide text-ink-900/60">{l}</p>
              </div>
            ))}
          </div>

          <a
            href="https://gce.com.hk/info/about"
            target="_blank"
            rel="noreferrer"
            className="reveal arrow-link mt-9 text-[14.5px] text-ink-900 decoration-rust-500/50 hover:decoration-rust-500"
            style={{ '--reveal-delay': '380ms' } as React.CSSProperties}
          >
            {t.about.link}
            <ArrowUpRight width={15} height={15} className="text-rust-600" />
          </a>
        </div>

        {/* Photo collage */}
        <div className="relative lg:col-span-6">
          <div className="reveal relative ml-auto w-[86%]" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
            <div className="absolute -left-3 -top-3 h-full w-full border border-rust-500/50" aria-hidden="true" />
            <img src={im("/images/rock-core.jpg")} alt={t.about.img1Caption} className="relative w-full object-cover" loading="lazy" />
            <p className="mt-3 text-right font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-900/50">{t.about.img1Caption}</p>
          </div>
          <div className="reveal relative -mt-16 w-[52%] md:-mt-24" style={{ '--reveal-delay': '300ms' } as React.CSSProperties}>
            <img src={im("/images/core-logging.jpg")} alt={t.about.img2Caption} className="w-full border-[6px] border-paper object-cover shadow-[0_18px_44px_-18px_rgba(13,24,46,0.4)]" loading="lazy" />
            <p className="mt-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-900/50">{t.about.img2Caption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
