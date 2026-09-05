import { Link } from 'react-router-dom'
import { aboutFeatures, aboutStats, site } from '../../data/site.js'
import {
  LuArrowRight,
  LuAward,
  LuCheck,
  LuCircleCheck,
  LuClock,
  LuPhone,
  LuShield,
  LuUsers,
  LuWrench,
} from 'react-icons/lu'

const featureIcons = {
  wrench: LuWrench,
  clock: LuClock,
  shield: LuShield,
}

const statIcons = {
  users: LuUsers,
  wrench: LuWrench,
  check: LuCircleCheck,
}

function Eyebrow({ children, align = 'start' }) {
  return (
    <p className={`about-eyebrow about-eyebrow-${align}`}>
      <span className="about-eyebrow-line" />
      {children}
      <span className="about-eyebrow-line" />
    </p>
  )
}

export default function HomeAbout() {
  return (
    <section className="about-stage" aria-labelledby="about-heading">
      <div className="custom_container">
        <header className="about-intro">
          <Eyebrow align="center">About Faber Chimney</Eyebrow>
          <h2 id="about-heading" className="about-intro-title">
            Your Trusted <span>Chimney Repair</span> Experts
          </h2>
          <p className="about-intro-copy">
            Professional chimney repair and maintenance services designed to keep your kitchen
            clean, safe and comfortable.
          </p>
        </header>

        <div className="about-layout">
          <div className="about-media">
            <div className="about-frame" aria-hidden="true">
              <span className="about-corner about-corner-tl" />
              <span className="about-corner about-corner-tr" />
              <span className="about-corner about-corner-bl" />
              <span className="about-corner about-corner-br" />
            </div>

            <div className="about-photo-wrap">
              <img
                src="/images/about.png"
                alt="Faber Chimney technician repairing a kitchen chimney"
                className="about-photo"
              />
              <div className="about-photo-veil" />

              <span className="about-live">
                <span className="about-live-dot" />
                Service Available
              </span>

              <div className="about-care">
                <span className="about-care-icon">
                  <LuWrench className="size-4" />
                </span>
                <div>
                  <p className="about-care-title">Professional Chimney Care</p>
                  <p className="about-care-meta">Repair · Cleaning · Maintenance</p>
                </div>
              </div>
            </div>

            <aside className="about-years">
              <span className="about-years-icon">
                <LuAward className="size-5" strokeWidth={1.6} />
              </span>
              <p>
                <span className="about-years-value">10+</span>
                <span className="about-years-label">Years Experience</span>
              </p>
            </aside>
          </div>

          <div className="about-copy">
            <Eyebrow>Why Choose Faber?</Eyebrow>
            <h3 className="about-copy-title">
              We Keep Your <span>Chimney Working</span> Like New.
            </h3>
            <p className="about-copy-text">
              At Faber Chimney, we provide dependable chimney repair, cleaning and maintenance
              services for homes and kitchens. Our trained technicians focus on finding the actual
              problem and providing the right solution.
            </p>
            <p className="about-copy-text">
              Whether your chimney has poor suction, a noisy motor, blocked filters or electrical
              issues, our team is ready to restore smooth and efficient performance.
            </p>

            <ul className="about-features">
              {aboutFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon]
                return (
                  <li key={feature.title} className="about-feature">
                    <span className="about-feature-icon">
                      {Icon ? <Icon className="size-4" /> : null}
                    </span>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                    <span className="about-feature-check" aria-hidden="true">
                      <LuCheck className="size-3.5" strokeWidth={2.4} />
                    </span>
                  </li>
                )
              })}
            </ul>

            <ul className="about-stats">
              {aboutStats.map((stat) => {
                const Icon = statIcons[stat.icon]
                return (
                  <li key={stat.label} className={`about-stat is-${stat.tone}`}>
                    <span className="about-stat-icon">
                      {Icon ? <Icon className="size-4" /> : null}
                    </span>
                    <p>
                      <span className="about-stat-value">{stat.value}</span>
                      <span className="about-stat-label">{stat.label}</span>
                    </p>
                  </li>
                )
              })}
            </ul>

            <div className="about-actions">
              <Link to="/contact" className="about-cta">
                <span>Book a Service</span>
                <LuArrowRight className="size-4" />
              </Link>
              <a href={site.phoneHref} className="about-call">
                <span className="about-call-icon">
                  <LuPhone className="size-4" />
                </span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
