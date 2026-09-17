import { useLang } from '@/i18n'
import { useReveal } from '@/hooks/useReveal'
import { ArrowRight, ArrowUpRight } from '@/components/icons'

export default function FeaturedProjects() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section id="featured" ref={ref} className="dot-grid relative bg-ink-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal kicker text-rust-400">{t.featured.kicker}</p>
            <h2 className="reveal font-display mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.015em] md:text-[44px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
              {t.featured.heading}
            </h2>
          </div>
          <a
            href="https://gce.com.hk/projects/gi"
            target="_blank"
            rel="noreferrer"
            className="reveal arrow-link text-[14px] text-white/80 decoration-white/40 hover:decoration-rust-400"
            style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
          >
            {t.featured.allProjects}
            <ArrowRight width={15} height={15} className="text-rust-400" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-12">
          {t.featured.items.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={`reveal group relative block overflow-hidden ${
                i % 4 === 0 || i % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5'
              }`}
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-rust-400">{p.cat}</p>
                <h3 className="font-display mt-2.5 max-w-[30ch] text-[19px] font-bold leading-[1.3] md:text-[22px]">{p.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">{p.client}</p>
                <p className="mt-1 hidden text-[12px] leading-relaxed text-white/50 md:block">{p.meta}</p>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-rust-400/70 pb-1 text-[12.5px] font-semibold tracking-wide text-white">
                  {t.featured.viewMore}
                  <ArrowUpRight width={14} height={14} className="text-rust-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/25 bg-ink-950/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight width={16} height={16} className="text-white" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
