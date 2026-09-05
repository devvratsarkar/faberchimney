import { Link } from 'react-router-dom'
import HomeBanner from '../../components/home/HomeBanner.jsx'
import HomeAbout from '../../components/home/HomeAbout.jsx'
import { services, site } from '../../data/site.js'
import { ArrowRightIcon, PhoneIcon } from '../../components/ui/AllSVG.jsx'

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container">
          <p className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">
            Our Services
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            Kitchen chimney repair solutions
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="rounded-2xl bg-white p-6">
                <p className="text-sm font-bold text-accent">{service.number}</p>
                <h3 className="mt-2 text-lg font-bold text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{service.description}</p>
              </article>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary"
          >
            View all services
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="custom_container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">Need professional chimney repair?</h2>
            <p className="mt-2 text-sm text-white/70">
              Book a doorstep visit and get your kitchen chimney working again.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-primary"
            >
              <PhoneIcon />
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white"
            >
              Book Chimney Repair
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
