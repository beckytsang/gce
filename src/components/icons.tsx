import type { SVGProps } from 'react'
import { im } from '../lib/img';

type P = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
}

/* GCE mark — road-perspective triangle derived from the original company logo */
export function GceMark({ size = 34, tone = 'rust' }: { size?: number; tone?: 'rust' | 'white' }) {
  const fill = tone === 'rust' ? 'rgb(178 80 31)' : 'currentColor'
  return (
    <svg width={size} height={size} viewBox="0 0 48 44" aria-hidden="true">
      <polygon points="24,3 3,41 45,41" fill={fill} />
      <polygon points="24,3 19.5,41 28.5,41" fill="#fff" opacity="0.92" />
      <line x1="24" y1="9" x2="24" y2="38" stroke={fill} strokeWidth="1.6" strokeDasharray="4.5 3.5" />
      <polygon points="24,3 15.5,41 19.5,41" fill="#fff" opacity="0.28" />
      <polygon points="24,3 28.5,41 32.5,41" fill="#fff" opacity="0.28" />
    </svg>
  )
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      {/* Original GCE logo mark, used as-is */}
      <img src={im("/images/logos/favicon.png")} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
      <span className="leading-none">
        <span className={`font-display block text-[22px] font-extrabold tracking-[0.06em] ${inverted ? 'text-white' : 'text-ink-900'}`}>
          GCE
        </span>
        <span className={`mt-1 block text-[9px] tracking-[0.22em] ${inverted ? 'text-white/60' : 'text-ink-900/55'}`}>
          香港土力工程有限公司
        </span>
      </span>
    </span>
  )
}

/* ——— Service & UI line icons: 24px grid, 1.5 stroke, square terminals ——— */

export function IconDrillRig(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 4.5 21M12 3l7.5 18M12 3v0" />
      <path d="M7.8 12.5h8.4M6.3 16.8h11.4" />
      <path d="M12 3v5.5" strokeDasharray="2.4 2" />
      <path d="M2.5 21h19" />
    </svg>
  )
}

export function IconMarine(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2.5v12" />
      <path d="M9 5.5h6M10 9h4M11 12.5h2" />
      <path d="M12 14.5 10.8 17h2.4L12 14.5Z" fill="currentColor" stroke="none" />
      <path d="M2.5 18.5c1.6-1.4 3.2-1.4 4.75 0s3.1 1.4 4.75 0 3.2-1.4 4.75 0 3.15 1.4 4.75 0" />
    </svg>
  )
}

export function IconCube(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12 20 7.5M12 12 4 7.5M12 12v9" />
      <path d="m8.6 7.2 5.4-2.7" strokeDasharray="1.8 1.8" />
    </svg>
  )
}

export function IconStrata(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 6.5h18M3 11c3-1.6 6 1.6 9 0s6 1.6 9 0M3 15.5h18M3 20c4-1.8 8 1.8 12 0 2.2-1 4-1 6 0" />
      <circle cx="7" cy="8.7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="17.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconPile(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M8 3h8v13a4 4 0 0 1-8 0V3Z" />
      <path d="M8 7.5h8M8 12h8" />
      <path d="M3.5 20.5c1.2-1 2.4-1 3.5 0M17 20.5c1.2-1 2.4-1 3.5 0" />
      <path d="M4.5 5.5 3 4M19.5 5.5 21 4" />
    </svg>
  )
}

export function IconBuilding(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 21V4.5h9V21M5 21h14M14 9h5v12" />
      <path d="M7.5 7.5h2M7.5 11h2M7.5 14.5h2M11 7.5h0M16.5 12h1M16.5 15.5h1" />
      <path d="M2.5 21h19" />
    </svg>
  )
}

export function IconGauge(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="M12 14 15.8 8.6" />
      <circle cx="12" cy="14" r="1.4" />
      <path d="M4 14h2.2M17.8 14H20M12 6V4.5" />
      <path d="M6 19.5h12" strokeDasharray="2 2" />
    </svg>
  )
}

/* ——— UI icons ——— */

export function ArrowRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  )
}

export function ArrowUpRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  )
}

export function IconMenu(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  )
}

export function IconClose(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

export function IconGlobe(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c-4.8 5.2-4.8 11.8 0 17 4.8-5.2 4.8-11.8 0-17Z" />
    </svg>
  )
}

export function IconPhone(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6.8 3.5h3.4l1.5 4.5-2.2 1.6a12 12 0 0 0 4.9 4.9l1.6-2.2 4.5 1.5v3.4c0 .8-.7 1.6-1.6 1.5C10.9 18 6 13.1 4.3 5.1c-.1-.9.7-1.6 1.5-1.6Z" />
    </svg>
  )
}

export function IconMail(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5.5" width="18" height="13" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  )
}

export function IconClock(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  )
}

export function IconPin(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s6.5-5.8 6.5-10.7A6.5 6.5 0 0 0 5.5 10.3C5.5 15.2 12 21 12 21Z" />
      <circle cx="12" cy="10.2" r="2.2" />
    </svg>
  )
}

export function IconBadge(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l2.3 1.9 3-.2 1.2 2.8 2.6 1.6-.8 2.9.8 2.9-2.6 1.6-1.2 2.8-3-.2L12 21l-2.3-1.9-3 .2-1.2-2.8L2.9 15l.8-2.9L2.9 9.2l2.6-1.6 1.2-2.8 3 .2L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  )
}

export const serviceIcons = [IconDrillRig, IconMarine, IconCube, IconStrata, IconPile, IconBuilding, IconGauge]
