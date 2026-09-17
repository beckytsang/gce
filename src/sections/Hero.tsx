import { useLang } from '@/i18n'
import { ArrowRight } from '@/components/icons'
import { im } from '../lib/img';

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink-900 text-white">
      {/* dot-grid texture */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
      {/* oversized 50 watermark */}
      <div
        aria-hidden="true"
        className="font-display pointer-events-none absolute -bottom-[6vw] left-0 select-none text-[26vw] font-extrabold leading-none tracking-tighter text-white/[0.035]"
      >
        1976
      </div>

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 lg:grid-cols-12">
        {/* Left: copy */}
        <div className="flex flex-col justify-center px-5 pb-16 pt-[120px] md:px-8 lg:col-span-7 lg:min-h-[100svh] lg:pb-28 lg:pt-[140px]">
          <div className="line-mask">
            <span style={{ '--line-delay': '80ms' } as React.CSSProperties}>
              <span className="inline-flex items-center gap-3 border border-rust-500/60 bg-rust-500/10 px-3.5 py-2">
                <span className="h-1.5 w-1.5 animate-pulse bg-rust-400" />
                <span className="kicker text-rust-400">{t.hero.badge}</span>
              </span>
            </span>
          </div>

          <h1
            className={`font-display mt-8 font-extrabold leading-[0.98] tracking-[-0.02em] ${
              lang === 'zh' ? 'text-[13.5vw] sm:text-[64px] lg:text-[76px] xl:text-[88px]' : 'text-[12vw] sm:text-[60px] lg:text-[72px] xl:text-[84px]'
            }`}
          >
            {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, i) => (
              <span className="line-mask" key={i}>
                <span style={{ '--line-delay': `${180 + i * 120}ms` } as React.CSSProperties}>
                  {i === 2 ? (
                    <>
                      <span className="text-rust-400">{line}</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-7 max-w-[52ch] text-[15px] leading-[1.85] text-white/70 md:text-[16px]"
            style={{ animation: 'line-rise 1s cubic-bezier(0.22,1,0.36,1) 640ms both' }}
          >
            {t.hero.sub}
          </p>

          {/* Aon-style "I want to" link list */}
          <div
            className="mt-10 max-w-md border-t border-white/10"
            style={{ animation: 'line-rise 1s cubic-bezier(0.22,1,0.36,1) 780ms both' }}
          >
            <p className="kicker mt-5 text-white/50">{t.hero.wantTo}</p>
            <ul className="mt-4 space-y-3.5">
              {t.hero.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="arrow-link text-[15px] text-white decoration-white/40 hover:decoration-rust-400">
                    {l.label}
                    <ArrowRight width={16} height={16} className="text-rust-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* meta strip */}
          <div
            className="mt-12 hidden flex-wrap gap-x-8 gap-y-3 lg:flex"
            style={{ animation: 'line-rise 1s cubic-bezier(0.22,1,0.36,1) 920ms both' }}
          >
            {t.hero.meta.map((m) => (
              <span key={m} className="flex items-center gap-2.5 text-[12.5px] tracking-wide text-white/60">
                <span className="h-[5px] w-[5px] rotate-45 bg-rust-500" />
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image panel */}
        <div className="relative lg:col-span-5">
          <div className="relative h-[46vh] overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full">
            <img
              src={im("/images/hero-tung-chung.jpg")}
              alt={t.hero.imgCaption}
              className="hero-img-settle h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-ink-950/25 lg:bg-gradient-to-r lg:from-ink-950/55 lg:via-transparent lg:to-transparent" />
            {/* rust edge bar */}
            <div className="absolute left-0 top-0 hidden h-full w-[5px] bg-rust-500 lg:block" />
            {/* caption chip */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 border border-white/20 bg-ink-950/60 px-4 py-3 backdrop-blur-sm md:left-8 lg:bottom-8">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse bg-rust-400" />
              <p className="text-[12px] leading-snug tracking-wide text-white/80">{t.hero.imgCaption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="scroll-cue absolute bottom-0 right-6 hidden flex-col items-center md:flex lg:right-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">{t.hero.scroll}</span>
      </div>
    </section>
  )
}
