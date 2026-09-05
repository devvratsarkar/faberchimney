import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../../data/site.js'
import { FaWhatsapp } from 'react-icons/fa'
import { LuArrowUpRight, LuMenu, LuPhone, LuX } from 'react-icons/lu'
import PrimaryMenu from './PrimaryMenu.jsx'
import TopToolbar from './TopToolbar.jsx'

export default function PrimaryHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          <Link to="/" className="shrink-0 leading-none" onClick={() => setOpen(false)}>
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
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2.5 text-[11px] font-bold tracking-[0.12em] text-white uppercase shadow-[0_10px_22px_rgba(228,0,20,0.28)] transition hover:-translate-y-0.5 hover:bg-primary sm:px-5 sm:py-3 sm:text-[12px] sm:tracking-[0.14em]"
            >
              <span className="hidden sm:inline">Book Repair</span>
              <span className="sm:hidden">Book</span>
              <LuArrowUpRight className="size-3.5 sm:size-4" />
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-primary xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-black/5 bg-white px-4 py-5 xl:hidden">
            <PrimaryMenu
              variant="mobile"
              onNavigate={() => setOpen(false)}
              className="flex flex-col gap-1"
            />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.14em] text-primary uppercase hover:bg-cream"
            >
              Contact
            </Link>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/10 px-4 py-3 text-sm font-bold text-primary"
              >
                <LuPhone className="size-4" />
                {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/10 px-4 py-3 text-sm font-bold text-primary"
              >
                <FaWhatsapp className="size-4 text-[#25D366]" />
                {site.whatsapp}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-white sm:col-span-2"
              >
                Book Repair
                <LuArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
