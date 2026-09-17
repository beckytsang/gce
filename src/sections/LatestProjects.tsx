import { useRef } from 'react'
import { useLang } from '@/i18n'
import { useReveal } from '@/hooks/useReveal'
import { ArrowRight } from '@/components/icons'

export default function LatestProjects() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()
  const strip = useRef<HTMLDivElement>(null)

  const nudge = (dir: 1 | -1) => {
    strip.current?.scrollBy({ left: dir * Math.min(420, window.innerWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="latest" ref={ref} className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal kicker text-rust-600">{t.latest.kicker}</p>
            <h2 className="reveal font-display mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink-900 md:text-[44px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
              {t.latest.heading}
            </h2>
          </div>
          <div className="reveal flex items-center gap-3" style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            <span className="mr-1 hidden font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-900/40 md:block">{t.latest.hint}</span>
            <button onClick={() => nudge(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center border border-ink-900/20 text-ink-900 transition-colors hover:border-rust-500 hover:text-rust-600">
              <ArrowRight width={17} height={17} className="rotate-180" />
            </button>
            <button onClick={() => nudge(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center border border-ink-900/20 text-ink-900 transition-colors hover:border-rust-500 hover:text-rust-600">
              <ArrowRight width={17} height={17} />
            </button>
          </div>
        </div>
      </div>

      <div className="reveal mt-12 md:mt-14" style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
        <div ref={strip} className="snap-strip strip-bleed flex gap-4 overflow-x-auto md:gap-5">
          {t.latest.items.map((item) => (
            <figure key={item.title} className="group w-[74vw] shrink-0 sm:w-[46vw] md:w-[340px]">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 bg-ink-950/80 px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-b border-ink-900/10 pb-3">
                <span className="font-display text-[15px] font-bold text-ink-900">{item.title}</span>
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-rust-500 transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
