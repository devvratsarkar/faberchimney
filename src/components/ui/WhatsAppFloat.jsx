import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../../data/site.js'

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-float-pulse" aria-hidden="true" />
      <span className="wa-float-btn">
        <FaWhatsapp className="size-7" />
      </span>
      <span className="wa-float-label">
        Chat on WhatsApp
        <em>{site.whatsapp}</em>
      </span>
    </a>
  )
}
