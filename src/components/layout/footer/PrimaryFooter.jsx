import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import {
  LuArrowUpRight,
  LuClock,
  LuMail,
  LuMapPin,
  LuPhone,
} from 'react-icons/lu'
import { navLinks, services, site } from '../../../data/site.js'
import SiteLogo from '../../ui/SiteLogo.jsx'

const footerLinks = [...navLinks, { name: 'Contact', path: '/contact' }]

export default function PrimaryFooter() {
  return (
    <footer className="footer-stage" id="site-footer">
      <div className="footer-cta">
        <div className="custom_container footer-cta-inner">
          <div>
            <p className="footer-cta-eyebrow">Doorstep service in {site.city}</p>
            <h2 className="footer-cta-title">Need chimney repair in Kolkata today?</h2>
          </div>
          <div className="footer-cta-actions">
            <a href={site.phoneHref} className="footer-cta-btn footer-cta-btn-call">
              <LuPhone className="size-4" />
              Call now
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="footer-cta-btn footer-cta-btn-wa"
            >
              <FaWhatsapp className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="custom_container footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <SiteLogo inverted />
            <p className="footer-brand-copy">
              Professional kitchen chimney repair, cleaning and maintenance across Kolkata.
              Trained technicians, same-day visits and honest repair work.
            </p>
            <div className="footer-hours">
              <LuClock className="size-4" />
              <span>{site.hours}</span>
            </div>
          </div>

          <nav className="footer-col" aria-label="Quick links">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-list">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-list">
              {services.map((service) => (
                <li key={service.number}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-contact">
              <li>
                <a href={site.phoneHref}>
                  <span className="footer-contact-icon">
                    <LuPhone className="size-4" />
                  </span>
                  <span>
                    <span className="footer-contact-label">Call</span>
                    {site.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="footer-contact-icon">
                    <FaWhatsapp className="size-4" />
                  </span>
                  <span>
                    <span className="footer-contact-label">WhatsApp</span>
                    {site.whatsapp}
                  </span>
                </a>
              </li>
              <li>
                <a href={site.emailHref}>
                  <span className="footer-contact-icon">
                    <LuMail className="size-4" />
                  </span>
                  <span>
                    <span className="footer-contact-label">Email</span>
                    {site.email}
                  </span>
                </a>
              </li>
              <li>
                <span className="footer-contact-static">
                  <span className="footer-contact-icon">
                    <LuMapPin className="size-4" />
                  </span>
                  <span>
                    <span className="footer-contact-label">Location</span>
                    {site.address}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <section className="footer-map" aria-labelledby="footer-map-heading">
          <div className="footer-map-head">
            <div>
              <p className="footer-heading" id="footer-map-heading">
                Find us in Kolkata
              </p>
              <p className="footer-map-copy">
                Serving homes and kitchens across Kolkata and nearby areas.
              </p>
            </div>
            <a
              href={site.mapDirectionsHref}
              target="_blank"
              rel="noreferrer"
              className="footer-map-link"
            >
              Open in Google Maps
              <LuArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="footer-map-frame">
            <iframe
              title="Faber Chimney service area in Kolkata"
              src={site.mapSrc}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <aside className="footer-map-card">
              <span className="footer-map-pin">
                <LuMapPin className="size-4" />
              </span>
              <div>
                <p className="footer-map-city">{site.city}</p>
                <p className="footer-map-area">West Bengal, India</p>
              </div>
              <a
                href={site.mapDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="footer-map-directions"
              >
                Directions
                <LuArrowUpRight className="size-3.5" />
              </a>
            </aside>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <div className="custom_container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Kitchen chimney repair across Kolkata.</p>
        </div>
      </div>
    </footer>
  )
}
