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

const servicePromises = [
  'Professional Service',
  'Experienced Technicians',
  'Reliable Chimney Repair',
]

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

        <div className="services-cta">
          <div className="services-cta-copy">
            <p className="services-cta-kicker">
              <WrenchIcon className="size-4" strokeWidth={1.8} />
              Need Chimney Repair?
            </p>
            <h3>
              Having a chimney problem?
              <span>Let our experts fix it.</span>
            </h3>
            <p className="services-cta-text">
              Get professional chimney repair service from experienced technicians.
            </p>
          </div>
          <Link to="/contact" className="services-cta-btn">
            <span>Book Repair</span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <ul className="services-promises">
          {servicePromises.map((item) => (
            <li key={item}>
              <span aria-hidden="true">
                <CheckIcon className="size-3" strokeWidth={2.6} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
