import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero.jsx'
import { LuX } from 'react-icons/lu'
import { galleryItems } from '../../data/site.js'

export default function GalleryPage() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    document.body.style.overflow = active === null ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Chimney"
        highlight="Repair Work"
        description="Take a look at our professional chimney repair and maintenance work. Click any image to view it in full size."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="custom_container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              className="group overflow-hidden rounded-3xl bg-cream text-left"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <p className="px-5 py-4 text-sm font-bold text-primary">{item.title}</p>
            </button>
          ))}
        </div>

        <div className="custom_container mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-secondary"
          >
            Book Chimney Repair
          </Link>
        </div>
      </section>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/20 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            onClick={() => setActive(null)}
          >
            <LuX className="size-6" />
          </button>
          <img
            src={galleryItems[active].src}
            alt={galleryItems[active].title}
            className="h-auto max-h-[min(72dvh,calc(100dvh-6rem))] w-auto max-w-[min(92vw,56rem)] rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  )
}
