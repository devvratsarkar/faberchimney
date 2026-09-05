import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reviewSummary, testimonials } from '../../data/site.js'
import {
  LuCheck,
  LuChevronLeft,
  LuChevronRight,
  LuQuote,
  LuStar,
} from 'react-icons/lu'

const AUTO_MS = 6500

function useVisibleCount() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1180) setCount(3)
      else if (window.innerWidth >= 768) setCount(2)
      else setCount(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

export default function HomeReviews() {
  const visible = useVisibleCount()
  const maxIndex = Math.max(0, testimonials.length - visible)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = (next) => {
    const wrapped = ((next % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1)
    setIndex(wrapped)
  }

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined
    const timer = window.setInterval(() => goTo(index + 1), AUTO_MS)
    return () => window.clearInterval(timer)
  }, [paused, index, maxIndex])

  return (
    <section className="reviews-stage" aria-labelledby="reviews-heading">
      <div className="custom_container">
        <header className="reviews-intro">
          <p className="reviews-eyebrow">
            <span className="reviews-eyebrow-line" />
            Customer Reviews
            <span className="reviews-eyebrow-line" />
          </p>
          <h2 id="reviews-heading" className="reviews-intro-title">
            What Our <span>Customers Say</span>
          </h2>
          <p className="reviews-intro-copy">
            Our customers trust us for professional and reliable chimney repair services.
          </p>

          <div className="reviews-summary">
            <div className="reviews-summary-score">
              <p>{reviewSummary.rating}</p>
              <span>
                {Array.from({ length: 5 }).map((_, star) => (
                  <LuStar key={star} className="size-3.5 fill-current stroke-none" />
                ))}
              </span>
            </div>
            <span className="reviews-summary-rule" />
            <div className="reviews-summary-trust">
              <span className="reviews-summary-check">
                <LuCheck className="size-3.5" strokeWidth={3} />
              </span>
              <p>
                <strong>{reviewSummary.title}</strong>
                <span>{reviewSummary.detail}</span>
              </p>
            </div>
          </div>
        </header>

        <div
          className="reviews-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="reviews-nav is-prev"
            aria-label="Previous reviews"
            onClick={() => goTo(index - 1)}
          >
            <LuChevronLeft className="size-5" />
          </button>

          <div className="reviews-viewport">
            <ul
              className="reviews-track"
              style={{ '--index': index, '--visible': visible }}
            >
              {testimonials.map((item) => (
                <li key={item.name}>
                  <article className="review-card">
                    <LuQuote className="review-card-mark" />
                    <div className="review-card-top">
                      <span className="review-card-quote">
                        <LuQuote className="size-5" />
                      </span>
                      <span className="review-card-badge">Verified Customer</span>
                    </div>
                    <div className="review-card-stars">
                      {Array.from({ length: item.rating }).map((_, star) => (
                        <LuStar key={`${item.name}-${star}`} className="size-4 fill-current" />
                      ))}
                    </div>
                    <blockquote>{item.review}</blockquote>
                    <p className="review-card-service">{item.service}</p>
                    <footer>
                      <span className="review-card-avatar">{item.initials}</span>
                      <span>
                        <strong>{item.name}</strong>
                        <em>{item.location}</em>
                      </span>
                      <span className="review-card-ok" aria-hidden="true">
                        <LuCheck className="size-3" strokeWidth={2.6} />
                      </span>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="reviews-nav is-next"
            aria-label="Next reviews"
            onClick={() => goTo(index + 1)}
          >
            <LuChevronRight className="size-5" />
          </button>
        </div>

        <div className="reviews-dots" role="tablist" aria-label="Review slides">
          {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
            <button
              key={dot}
              type="button"
              role="tab"
              aria-selected={dot === index}
              aria-label={`Show reviews ${dot + 1}`}
              className={dot === index ? 'is-active' : ''}
              onClick={() => goTo(dot)}
            />
          ))}
        </div>

        <div className="reviews-foot">
          <p>Need chimney repair?</p>
          <Link to="/contact" className="reviews-foot-btn">
            Book Chimney Repair
          </Link>
        </div>
      </div>
    </section>
  )
}
