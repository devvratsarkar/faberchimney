import { NavLink } from 'react-router-dom'
import { LuChevronRight } from 'react-icons/lu'
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
      {links.map((link, index) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            isDesktop
              ? `header-nav-link${isActive ? ' is-active' : ''}`
              : `offcanvas-nav-link${isActive ? ' is-active' : ''}`
          }
        >
          {isDesktop ? (
            link.name
          ) : (
            <>
              <span className="offcanvas-nav-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="offcanvas-nav-label">{link.name}</span>
              <LuChevronRight className="offcanvas-nav-arrow" />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
