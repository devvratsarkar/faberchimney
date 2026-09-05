import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { LuArrowUpRight, LuClock, LuMapPin, LuPhone, LuX } from 'react-icons/lu'
import { navLinks, site } from '../../../data/site.js'
import SiteLogo from '../../ui/SiteLogo.jsx'
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
        <div className="h-0.75 bg-linear-to-r from-secondary via-accent to-secondary" />

        <div className="offcanvas-head">
          <SiteLogo compact onClick={onClose} />
          <button
            type="button"
            className="offcanvas-close"
            aria-label="Close menu"
            onClick={onClose}
          >
            <LuX className="size-6" />
          </button>
        </div>

        <div className="offcanvas-body">
          <p className="offcanvas-kicker">Menu</p>
          <PrimaryMenu
            variant="mobile"
            links={offcanvasLinks}
            onNavigate={onClose}
            className="offcanvas-nav"
          />
        </div>

        <div className="offcanvas-foot">
          <a href={site.phoneHref} className="offcanvas-contact">
            <span className="offcanvas-contact-icon">
              <LuPhone className="size-4" />
            </span>
            <span>
              <span className="offcanvas-contact-label">Call us</span>
              <span className="offcanvas-contact-value">{site.phone}</span>
            </span>
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="offcanvas-contact"
          >
            <span className="offcanvas-contact-icon is-whatsapp">
              <FaWhatsapp className="size-4" />
            </span>
            <span>
              <span className="offcanvas-contact-label">WhatsApp</span>
              <span className="offcanvas-contact-value">{site.whatsapp}</span>
            </span>
          </a>

          <Link to="/contact" onClick={onClose} className="offcanvas-cta">
            Book Repair
            <LuArrowUpRight className="size-4" />
          </Link>

          <p className="offcanvas-meta">
            <LuMapPin className="size-3.5" />
            {site.city}
            <span />
            <LuClock className="size-3.5" />
            {site.hours}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
