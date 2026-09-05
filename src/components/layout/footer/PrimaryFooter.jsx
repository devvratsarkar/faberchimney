import { Link } from 'react-router-dom'
import { navLinks, site } from '../../../data/site.js'
import { LuMail, LuPhone } from 'react-icons/lu'

export default function PrimaryFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="custom_container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-primary">
            Faber <span className="text-secondary">Chimney</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-black/60">
            Professional chimney repair services for reliable, safe and efficient kitchen chimney performance.
          </p>
          <div className="mt-5 space-y-3">
            <a href={site.phoneHref} className="flex items-center gap-3 text-sm text-black/75 hover:text-accent">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-primary">
                <LuPhone className="size-4" />
              </span>
              {site.phone}
            </a>
            <a href={site.emailHref} className="flex items-center gap-3 text-sm text-black/75 hover:text-accent">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-primary">
                <LuMail className="size-4" />
              </span>
              {site.email}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-accent uppercase">Quick Links</h2>
          <div className="mt-5 flex flex-col gap-3">
            {[...navLinks, { name: 'Contact', path: '/contact' }].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-black/60 transition hover:translate-x-1 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-accent uppercase">Find Us</h2>
          <p className="mt-5 text-sm leading-6 text-black/60">{site.address}</p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
            <iframe
              title="Faber Chimney location"
              src={site.mapSrc}
              className="h-40 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-black/50">
        © {new Date().getFullYear()} {site.name}. All Rights Reserved.
      </div>
    </footer>
  )
}
