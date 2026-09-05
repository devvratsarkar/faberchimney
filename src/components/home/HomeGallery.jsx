import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { galleryItems } from '../../data/site.js'
import { LuChevronLeft, LuChevronRight, LuExpand, LuSearch, LuX } from 'react-icons/lu'

export default function HomeGallery() {
  const [active, setActive] = useState(null)
  const total = galleryItems.length
  const current = active === null ? null : galleryItems[active]

  const goTo = (next) => {
    setActive((next + total) % total)
  }

  useEffect(() => {
    if (active === null) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') goTo(active + 1)
      if (event.key === 'ArrowLeft') goTo(active - 1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section className="gallery-stage" aria-labelledby="gallery-heading">
      <div className="custom_container">
        <header className="gallery-intro">
          <p className="gallery-eyebrow">
            <span className="gallery-eyebrow-line" />
            Our Work Gallery
            <span className="gallery-eyebrow-line" />
          </p>
          <h2 id="gallery-heading" className="gallery-intro-title">
            See Our <span>Chimney Repair Work</span>
          </h2>
          <p className="gallery-intro-copy">
            Take a look at our professional chimney repair and maintenance work. Click any image to
            view it in full size.
          </p>
        </header>

        <ul className="gallery-grid">
          {galleryItems.map((item, index) => (
            <li key={item.src}>
              <button
                type="button"
                className="gallery-tile"
                onClick={() => setActive(index)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.src} alt="" />
                <span className="gallery-tile-veil" />
                <span className="gallery-tile-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="gallery-tile-zoom" aria-hidden="true">
                  <LuSearch className="size-4" />
                </span>
                <span className="gallery-tile-copy">
                  <span className="gallery-tile-title">{item.title}</span>
                  <span className="gallery-tile-hint">
                    Click to view
                    <LuExpand className="size-3.5" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="gallery-foot">
          Need professional chimney repair?{' '}
          <Link to="/contact">Book a visit</Link>
        </p>
      </div>

      {current ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close gallery"
            onClick={() => setActive(null)}
          >
            <LuX className="size-6" />
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav is-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation()
              goTo(active - 1)
            }}
          >
            <LuChevronLeft className="size-5" />
          </button>
          <figure
            className="gallery-lightbox-frame"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={current.src} alt={current.title} />
            <figcaption>
              <span>{current.title}</span>
              <span>
                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="gallery-lightbox-nav is-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation()
              goTo(active + 1)
            }}
          >
            <LuChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  )
}
