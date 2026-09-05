import { Link } from 'react-router-dom'
import { services } from '../../data/site.js'
import {
  ArrowRightIcon,
  CheckIcon,
  ChipIcon,
  FanIcon,
  LightbulbIcon,
  PowerIcon,
  SpeakerIcon,
  WrenchIcon,
} from '../ui/AllSVG.jsx'

const serviceIcons = {
  power: PowerIcon,
  fan: FanIcon,
  wrench: WrenchIcon,
  light: LightbulbIcon,
  speaker: SpeakerIcon,
  chip: ChipIcon,
}

export default function HomeServices() {
  return (
    <section className="services-stage" aria-labelledby="services-heading">
      <div className="custom_container">
        <header className="services-intro">
          <p className="services-eyebrow">
            <span className="services-eyebrow-line" />
            Chimney Repair Services
            <span className="services-eyebrow-line" />
          </p>
          <h2 id="services-heading" className="services-intro-title">
            Complete Chimney <span>Repair Solutions</span>
          </h2>
          <p className="services-intro-copy">
            From chimney not working to suction, motor, lighting and electrical problems, our
            technicians provide reliable repair solutions for your kitchen chimney.
          </p>
        </header>

        <ul className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <li key={service.number}>
                <article className="service-card">
                  <span className="service-card-index" aria-hidden="true">
                    {service.number}
                  </span>
                  <span className="service-card-icon">
                    {Icon ? <Icon className="size-5" strokeWidth={1.7} /> : null}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <span className="service-check" aria-hidden="true">
                          <CheckIcon className="size-3" strokeWidth={2.6} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="service-card-cta">
                    Get Repair Service
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
