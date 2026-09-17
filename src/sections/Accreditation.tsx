import { useLang } from '@/i18n'
import { useReveal } from '@/hooks/useReveal'
import { IconBadge } from '@/components/icons'
import { im } from '../lib/img';

const clientLogos = [
  { src: im('/images/logos/aa.png'), en: 'Airport Authority Hong Kong', zh: '香港機場管理局' },
  { src: im('/images/logos/archsd.png'), en: 'Architectural Services Department', zh: '建築署' },
  { src: im('/images/logos/cedd.png'), en: 'Civil Engineering and Development Department', zh: '土木工程拓展署' },
  { src: im('/images/logos/ha.png'), en: 'Hospital Authority', zh: '醫院管理局' },
  { src: im('/images/logos/hkha.png'), en: 'Hong Kong Housing Authority', zh: '香港房屋委員會' },
  { src: im('/images/logos/hkhs.png'), en: 'Hong Kong Housing Society', zh: '香港房屋協會' },
  { src: im('/images/logos/landsd.png'), en: 'Lands Department', zh: '地政總署' },
  { src: im('/images/logos/mtr.png'), en: 'MTR Corporation', zh: '香港鐵路有限公司' },
]

export default function Accreditation() {
  const { t, lang } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section id="accreditation" ref={ref} className="dot-grid-ink bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal kicker text-rust-600">{t.accreditation.kicker}</p>
            <h2 className="reveal font-display mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink-900 md:text-[44px]" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
              {t.accreditation.heading}
            </h2>
          </div>
          <p className="reveal max-w-[42ch] text-[14px] leading-[1.85] text-ink-900/60" style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            {t.accreditation.sub}
          </p>
        </div>

        {/* Certification cards */}
        <div className="mt-12 grid grid-cols-1 border-l border-t border-ink-900/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {t.accreditation.certs.map((c, i) => (
            <div
              key={c.title}
              className="reveal group flex flex-col border-b border-r border-ink-900/10 bg-white/60 p-6 transition-colors duration-300 hover:bg-white"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="flex h-16 items-center">
                {c.img ? (
                  <img src={c.img} alt={c.title} className="max-h-14 w-auto object-contain" loading="lazy" />
                ) : (
                  <IconBadge width={40} height={40} className="text-rust-600" />
                )}
              </div>
              <h3 className="font-display mt-5 text-[16px] font-bold leading-snug text-ink-900">{c.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-ink-900/55">{c.meta}</p>
            </div>
          ))}
        </div>

        {/* Client logo grid */}
        <p className="reveal kicker mt-14 text-ink-900/45" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
          {t.accreditation.clientsLabel}
        </p>
        <div className="mt-6 grid grid-cols-2 border-l border-t border-ink-900/10 sm:grid-cols-4">
          {clientLogos.map((c, i) => (
            <div
              key={c.src}
              className="reveal flex h-24 items-center justify-center border-b border-r border-ink-900/10 bg-white/50 p-4 md:h-28"
              style={{ '--reveal-delay': `${i * 50}ms` } as React.CSSProperties}
            >
              <img
                src={c.src}
                alt={lang === 'zh' ? c.zh : c.en}
                className="max-h-14 w-auto object-contain grayscale-[35%] transition-all duration-300 hover:grayscale-0 md:max-h-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
