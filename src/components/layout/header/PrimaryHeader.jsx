import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../../data/site.js'
import { LuArrowUpRight, LuMenu, LuPhone } from 'react-icons/lu'
import OffcanvasMenu from './OffcanvasMenu.jsx'
import PrimaryMenu from './PrimaryMenu.jsx'
import TopToolbar from './TopToolbar.jsx'

export default function PrimaryHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="h-[3px] bg-linear-to-r from-secondary via-accent to-secondary" />
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <TopToolbar />
      </div>

      <div
        className={`border-b border-black/5 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_30px_rgba(23,37,75,0.08)]' : ''
        }`}
      >
        <div className="custom_container flex items-center justify-between gap-4 py-3 lg:py-3.5">
          <Link to="/" className="shrink-0 leading-none" onClick={closeMenu}>
            <span className="font-display block text-[22px] font-bold tracking-tight text-primary">
              Faber
            </span>
            <span className="mt-0.5 block text-[11px] font-bold tracking-[0.22em] text-secondary uppercase">
              Chimney Repair
            </span>
          </Link>

          <PrimaryMenu
            variant="desktop"
            className="hidden items-center rounded-full border border-black/6 bg-white px-2 shadow-[0_8px_28px_rgba(23,37,75,0.06)] xl:flex"
          />

          <div className="flex items-center gap-3 lg:gap-5">
            <a href={site.phoneHref} className="hidden items-center gap-3 md:inline-flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <LuPhone className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold tracking-[0.16em] text-black/40 uppercase">
                  Call Us
                </span>
                <span className="block text-sm font-bold text-primary">{site.phone}</span>
              </span>
            </a>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2.5 text-[11px] font-bold tracking-[0.12em] text-white uppercase shadow-[0_10px_22px_rgba(228,0,20,0.28)] transition hover:-translate-y-0.5 hover:bg-primary sm:px-5 sm:py-3 sm:text-[12px] sm:tracking-[0.14em]"
            >
              <span className="hidden sm:inline">Book Repair</span>
              <span className="sm:hidden">Book</span>
              <LuArrowUpRight className="size-3.5 sm:size-4" />
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-primary xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-offcanvas"
              onClick={() => setOpen(true)}
            >
              <LuMenu className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <OffcanvasMenu open={open} onClose={closeMenu} />
    </header>
  )
}
