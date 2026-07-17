import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainNav, serviceDetailRoutes } from '../data/navigation'

function navClass(isActive: boolean) {
  return [
    'relative rounded-md px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-3 sm:text-xs sm:tracking-[0.16em]',
    isActive ? 'text-orange' : 'text-cream/85 hover:text-orange',
  ].join(' ')
}

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSvc, setMobileSvc] = useState(false)
  const [deskSvc, setDeskSvc] = useState(false)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSvc(false)
    setDeskSvc(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function openDeskSvc() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setDeskSvc(true)
  }

  function scheduleCloseDeskSvc() {
    closeTimer.current = window.setTimeout(() => setDeskSvc(false), 160)
  }

  const servicesSectionActive = pathname.startsWith('/services')

  return (
    <header
      className={`relative sticky top-0 z-[60] border-b transition-[box-shadow,background-color] duration-300 ${
        scrolled
          ? 'border-stone-200 bg-white/98 shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl'
          : 'border-stone-200 bg-white'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-orange/75 via-amber to-gold/90"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <img src="/logo1.png" alt="GTB Holistic . — Home" className="h-10 w-auto sm:h-11" width={120} height={48} />
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-0.5 lg:flex" aria-label="Primary">
          {mainNav.map((item) =>
            'hasDropdown' in item && item.hasDropdown ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={openDeskSvc}
                onMouseLeave={scheduleCloseDeskSvc}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => {
                    const deep =
                      pathname.startsWith('/services') ||
                      serviceDetailRoutes.some((r) => pathname.startsWith(r.path))
                    return `${navClass(isActive || deep || deskSvc)} relative inline-flex items-center gap-1`
                  }}
                >
                  {({ isActive }) => {
                    const deep =
                      pathname.startsWith('/services') ||
                      serviceDetailRoutes.some((r) => pathname.startsWith(r.path))
                    const on = isActive || deep
                    return (
                      <>
                        <span className="relative z-10 flex items-center gap-1">
                          {item.label}
                          <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition ${deskSvc ? 'rotate-180' : ''}`} aria-hidden />
                        </span>
                        {on ? (
                          <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-orange" aria-hidden />
                        ) : null}
                      </>
                    )
                  }}
                </NavLink>
                <AnimatePresence>
                  {deskSvc ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full z-50 mt-2 min-w-[11rem] w-max max-w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-[hsl(36_20%_88%_/0.6)] bg-white/95 py-2 shadow-ref-soft backdrop-blur-xl"
                      onMouseEnter={openDeskSvc}
                      onMouseLeave={scheduleCloseDeskSvc}
                    >
                      {serviceDetailRoutes.map((s) => {
                        const currentSvc = pathname === s.path
                        return (
                          <Link
                            key={s.path}
                            to={s.path}
                            className={`block px-4 py-2.5 text-left text-xs font-medium leading-snug tracking-normal normal-case transition hover:bg-stone-900/[0.06] hover:text-orange sm:text-sm ${
                              currentSvc ? 'font-semibold text-orange' : 'text-muted'
                            }`}
                          >
                            {s.label}
                          </Link>
                        )
                      })}
                      <Link
                        to="/services"
                        className="block border-t border-stone-200 px-4 py-2.5 text-sm font-semibold text-orange hover:bg-stone-900/[0.06]"
                      >
                        View all services
                      </Link>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `${navClass(isActive)} relative inline-flex`}>
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive ? (
                      <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-orange" aria-hidden />
                    ) : null}
                  </>
                )}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/booking"
            className="hidden rounded-full bg-gradient-to-r from-orange/88 to-orange/68 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition hover:from-orange/95 hover:to-orange/75 hover:shadow-lg hover:shadow-orange/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:inline-flex"
          >
            Contact
          </Link>

          <button
            type="button"
            className="inline-flex rounded-xl p-2 text-cream hover:bg-stone-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative h-6 w-6">
              <motion.span
                className="absolute inset-0"
                animate={{ rotate: mobileOpen ? 90 : 0, opacity: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.22 }}
              >
                <Menu className="h-6 w-6" aria-hidden />
              </motion.span>
              <motion.span
                className="absolute inset-0"
                animate={{ rotate: mobileOpen ? 0 : -90, opacity: mobileOpen ? 1 : 0 }}
                transition={{ duration: 0.22 }}
              >
                <X className="h-6 w-6" aria-hidden />
              </motion.span>
            </span>
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-stone-200 bg-white lg:hidden"
          >
            <div className="max-h-[min(75vh,28rem)] overflow-y-auto px-4 py-5">
              <div className="flex flex-col gap-1">
                {mainNav.map((item) =>
                  'hasDropdown' in item && item.hasDropdown ? (
                    <div key={item.path} className="rounded-xl border border-stone-200 bg-stone-50">
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition hover:text-orange ${
                          servicesSectionActive ? 'text-orange' : 'text-cream'
                        }`}
                        onClick={() => setMobileSvc((v) => !v)}
                        aria-expanded={mobileSvc}
                      >
                        {item.label}
                        <ChevronDown className={`h-5 w-5 transition ${mobileSvc ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSvc ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-stone-200"
                          >
                            <div className="flex flex-col py-2">
                              {serviceDetailRoutes.map((s) => {
                                const currentSvc = pathname === s.path
                                return (
                                  <Link
                                    key={s.path}
                                    to={s.path}
                                    className={`px-6 py-2.5 text-left text-xs font-medium leading-snug tracking-normal normal-case hover:bg-stone-900/[0.06] hover:text-orange sm:text-sm ${
                                      currentSvc ? 'font-semibold text-orange' : 'text-muted'
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {s.label}
                                  </Link>
                                )
                              })}
                              <Link
                                to="/services"
                                className="px-6 py-2.5 text-sm font-semibold text-orange hover:bg-stone-900/[0.06]"
                                onClick={() => setMobileOpen(false)}
                              >
                                View all services
                              </Link>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-stone-900/[0.06] hover:text-orange ${
                        pathname === item.path ? 'text-orange' : 'text-cream'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <Link
                to="/booking"
                className="mt-5 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange/88 to-orange/68 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:from-orange/95 hover:to-orange/75 hover:shadow-lg hover:shadow-orange/25"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}