import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero.jsx'
import { CheckIcon } from '../../components/ui/AllSVG.jsx'
import { services } from '../../data/site.js'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Chimney"
        highlight="Repair Solutions"
        description="From chimney not working to suction, motor, lighting and electrical problems, our technicians provide reliable repair solutions for your kitchen chimney."
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="rounded-3xl bg-white p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-accent">{service.number}</p>
                <p className="text-xs font-bold tracking-[0.14em] text-secondary uppercase">
                  Repair
                </p>
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-black/60">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-black/70">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex text-sm font-bold text-secondary hover:text-primary"
              >
                Book this service
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
