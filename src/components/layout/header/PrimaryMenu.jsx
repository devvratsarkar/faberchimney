import { NavLink } from 'react-router-dom'
import { navLinks } from '../../../data/site.js'

export default function PrimaryMenu({
  onNavigate,
  className = '',
  variant = 'desktop',
  links = navLinks,
}) {
  const isDesktop = variant === 'desktop'

  return (
    <nav className={className} aria-label="Primary">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              'relative font-semibold tracking-[0.14em] uppercase transition',
              isDesktop
                ? 'px-4 py-2.5 text-[12px]'
                : 'rounded-full px-5 py-3.5 text-sm',
              isActive
                ? isDesktop
                  ? 'text-secondary after:absolute after:right-4 after:bottom-1 after:left-4 after:h-0.5 after:bg-secondary'
                  : 'bg-primary text-white'
                : isDesktop
                  ? 'text-primary hover:text-secondary'
                  : 'text-primary hover:bg-cream',
            ].join(' ')
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
