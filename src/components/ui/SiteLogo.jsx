import { Link } from 'react-router-dom'

export default function SiteLogo({
  onClick,
  inverted = false,
  compact = false,
}) {
  return (
    <Link
      to="/"
      className={`site-logo${inverted ? ' is-inverted' : ''}${compact ? ' is-compact' : ''}`}
      onClick={onClick}
      aria-label="Faber Chimney Repair home"
    >
      <span className="site-logo-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path
            d="M16.2 8.4c0-1.7 1.1-3 2.4-3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="site-logo-steam"
          />
          <path
            d="M21.4 7.2c0-2 1.3-3.5 2.7-3.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="site-logo-steam is-accent"
          />
          <path d="M7 18.2 20 10.4 33 18.2H7Z" fill="currentColor" />
          <path d="M13.2 19.4h13.6v3.2H13.2z" fill="currentColor" />
          <rect x="12.4" y="23.4" width="15.2" height="10.2" rx="2" fill="currentColor" />
          <path
            className="site-logo-slits"
            d="M16.2 27.2h7.6M16.2 30.2h7.6"
            stroke="currentColor"
            strokeWidth="1.55"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="site-logo-copy">
        <span className="site-logo-name">Faber</span>
        <span className="site-logo-tag">Chimney Repair</span>
      </span>
    </Link>
  )
}
