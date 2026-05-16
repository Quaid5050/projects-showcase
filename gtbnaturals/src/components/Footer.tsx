import { MegaContactBand } from './MegaContactBand'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-b border-stone-200 bg-linear-to-br from-white via-peach/28 to-peach/12">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: 'url(/footer_bg.png)' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-0 h-105 w-105 rounded-full bg-linear-to-br from-orange/12 via-peach/30 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-95 w-95 rounded-full bg-linear-to-tl from-amber/22 via-orange/12 to-gold/10 blur-3xl" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-1 h-0.75 bg-linear-to-r from-orange/75 via-amber to-gold/90"
        aria-hidden
      />
      <div className="relative z-1">
        <MegaContactBand />
      </div>
    </footer>
  )
}
