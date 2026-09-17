import { useEffect, useState } from 'react'
import { useLang } from '@/i18n'
import { Logo, IconMenu, IconClose, IconGlobe, ArrowRight } from '@/components/icons'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: t.nav.company, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#featured' },
    { label: t.nav.accreditation, href: '#accreditation' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-ink-900/90 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1360px] items-center justify-between px-5 md:h-[76px] md:px-8">
          <a href="#top" aria-label="GCE home" onClick={() => setOpen(false)}>
            <Logo inverted />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13.5px] font-medium tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-rust-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-1.5 border border-white/25 bg-ink-950/40 px-2.5 py-1.5 text-[12px] font-semibold tracking-wider text-white/80 backdrop-blur-sm transition-colors hover:border-rust-400 hover:text-white"
              aria-label="Switch language / 切換語言"
            >
              <IconGlobe width={14} height={14} />
              <span className={lang === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
              <span className="text-white/40">|</span>
              <span className={lang === 'zh' ? 'text-white' : 'text-white/50'}>繁</span>
            </button>

            <a
              href="#contact"
              className="hidden items-center gap-2 bg-rust-500 px-4 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-rust-400 md:inline-flex"
            >
              {t.nav.cta}
              <ArrowRight width={15} height={15} />
            </a>

            <button
              className="text-white lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <IconClose width={26} height={26} /> : <IconMenu width={26} height={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink-900 transition-opacity duration-400 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="dot-grid flex h-full flex-col justify-center px-8 pt-16">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-white/10 py-5 transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-rust-400">0{i + 1}</span>
              <span className="font-display text-[26px] font-bold text-white transition-colors group-hover:text-rust-400">
                {l.label}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-8 inline-flex w-fit items-center gap-2 bg-rust-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: open ? '480ms' : '0ms' }}
          >
            {t.nav.cta}
            <ArrowRight width={15} height={15} />
          </a>
        </div>
      </div>
    </>
  )
}
