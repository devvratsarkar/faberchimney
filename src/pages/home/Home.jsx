import { Link } from 'react-router-dom'
import HomeBanner from '../../components/home/HomeBanner.jsx'
import HomeAbout from '../../components/home/HomeAbout.jsx'
import HomeServices from '../../components/home/HomeServices.jsx'
import { site } from '../../data/site.js'
import { PhoneIcon } from '../../components/ui/AllSVG.jsx'

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />

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
