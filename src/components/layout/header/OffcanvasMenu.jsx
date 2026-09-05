import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { LuArrowUpRight, LuPhone, LuX } from 'react-icons/lu'
import { navLinks, site } from '../../../data/site.js'
import PrimaryMenu from './PrimaryMenu.jsx'

const offcanvasLinks = [...navLinks, { name: 'Contact', path: '/contact' }]

export default function OffcanvasMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const onResize = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open, onClose])

  return createPortal(
    <div className={`offcanvas-root ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="offcanvas-backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <div
        id="mobile-offcanvas"
        className="offcanvas-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="h-[3px] bg-linear-to-r from-secondary via-accent to-secondary" />

        <div className="flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3">
          <Link to="/" className="shrink-0 leading-none" onClick={onClose}>
            <span className="font-display block text-[22px] font-bold tracking-tight text-primary">
              Faber
            </span>
            <span className="mt-0.5 block text-[11px] font-bold tracking-[0.22em] text-secondary uppercase">
              Chimney Repair
            </span>
          </Link>

          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-2.5 text-[11px] font-bold tracking-[0.12em] text-white uppercase shadow-[0_10px_22px_rgba(228,0,20,0.28)]"
            >
              Book
              <LuArrowUpRight className="size-3.5" />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-primary"
              aria-label="Close menu"
              onClick={onClose}
            >
              <LuX className="size-6" />
            </button>
          </div>
        </div>

        <div className="offcanvas-body">
          <PrimaryMenu
            variant="mobile"
            links={offcanvasLinks}
            onNavigate={onClose}
            className="flex flex-col gap-1"
          />

          <div className="mt-5 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-sm font-bold text-primary"
            >
              <LuPhone className="size-4" />
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-sm font-bold text-primary"
            >
              <FaWhatsapp className="size-4 text-[#25D366]" />
              {site.whatsapp}
            </a>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(228,0,20,0.28)]"
            >
              Book Repair
              <LuArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
