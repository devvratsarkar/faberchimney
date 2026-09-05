import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero.jsx'
import { LuCheck, LuPhone } from 'react-icons/lu'
import { site } from '../../data/site.js'

const points = [
  {
    title: 'Expert Technicians',
    text: 'Skilled professionals with practical chimney repair experience.',
  },
  {
    title: 'Quick Service',
    text: 'Fast doorstep service with convenient appointment scheduling.',
  },
  {
    title: 'Reliable Repairs',
    text: 'Quality repair work focused on long-lasting performance.',
  },
]

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Faber Chimney"
        title="Your Trusted"
        highlight="Chimney Repair Experts"
        description="Professional chimney repair and maintenance services designed to keep your kitchen clean, safe and comfortable."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="custom_container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/about.png"
              alt="Professional chimney repair technician"
              className="h-[420px] w-full rounded-[28px] object-cover sm:h-[520px]"
            />
            <div className="absolute right-4 bottom-4 rounded-2xl bg-white p-4 shadow-lg">
              <p className="text-sm font-bold text-primary">Professional Chimney Care</p>
              <p className="mt-1 text-xs text-black/60">Repair • Cleaning • Maintenance</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold text-primary">
              Repair. Clean. Work Like New.
            </h2>
            <p className="mt-5 text-sm leading-7 text-black/65 sm:text-base">
              At Faber Chimney, we provide dependable chimney repair, cleaning and maintenance
              services for homes and kitchens. Our trained technicians focus on finding the actual
              problem and providing the right solution.
            </p>
            <p className="mt-4 text-sm leading-7 text-black/55 sm:text-base">
              Whether your chimney has poor suction, a noisy motor, blocked filters or electrical
              issues, our team is ready to help restore smooth and efficient performance.
            </p>
            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4 rounded-2xl bg-cream p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-secondary">
                    <LuCheck className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-primary">{point.title}</h3>
                    <p className="mt-1 text-sm text-black/60">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white"
              >
                <LuPhone className="size-4" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-5 py-3 text-sm font-bold text-primary"
              >
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
