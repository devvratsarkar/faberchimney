import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../../data/site.js'
import { LuArrowUpRight, LuMenu, LuPhone } from 'react-icons/lu'
import SiteLogo from '../../ui/SiteLogo.jsx'
import OffcanvasMenu from './OffcanvasMenu.jsx'
import PrimaryMenu from './PrimaryMenu.jsx'
import TopToolbar from './TopToolbar.jsx'

export default function PrimaryHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    let current = window.scrollY > 24
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const next = current ? y > 8 : y > 24
      if (next !== current) {
        current = next
        setScrolled(next)
      }
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    setScrolled(current)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="header-top">
        <div className="h-[3px] bg-linear-to-r from-secondary via-accent to-secondary" />
        <TopToolbar />
      </div>

      <div className={`header-bar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-bar-inner custom_container">
          <SiteLogo onClick={closeMenu} />

          <PrimaryMenu variant="desktop" className="header-nav hidden xl:flex" />

          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3 lg:gap-4">
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

            <span className="hidden h-8 w-px bg-black/8 lg:block" />

            <Link
              to="/contact"
              onClick={closeMenu}
              className="hidden items-center gap-2 rounded-full bg-secondary px-5 py-3 text-[12px] font-bold tracking-[0.14em] text-white uppercase shadow-[0_10px_22px_rgba(228,0,20,0.28)] transition hover:-translate-y-0.5 hover:bg-primary xl:inline-flex"
            >
              Book Repair
              <LuArrowUpRight className="size-4" />
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-primary xl:hidden"
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
    </>
  )
}
