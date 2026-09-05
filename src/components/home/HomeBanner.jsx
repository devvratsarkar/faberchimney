import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides, highlights, site } from '../../data/site.js'
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  PhoneIcon,
  ShieldIcon,
  WrenchIcon,
} from '../ui/AllSVG.jsx'

const highlightIcons = {
  wrench: WrenchIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
}

const SLIDE_MS = 7000

export default function HomeBanner() {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const slide = heroSlides[index]
  const slideNo = String(index + 1).padStart(2, '0')

  const goTo = (next) => {
    const wrapped = (next + heroSlides.length) % heroSlides.length
    if (wrapped === index) return
    setLeaving(index)
    setDirection(wrapped > index || (index === heroSlides.length - 1 && wrapped === 0) ? 1 : -1)
    setIndex(wrapped)
  }

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => {
      goTo(index + 1)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [paused, index])

  useEffect(() => {
    if (leaving === null) return undefined
    const timer = window.setTimeout(() => setLeaving(null), 1800)
    return () => window.clearTimeout(timer)
  }, [leaving])

  return (
    <section
      className={`banner-stage relative overflow-hidden bg-navy ${paused ? 'banner-is-paused' : ''}`}
      data-direction={direction}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[640px] lg:min-h-[780px]">
        <div className="banner-track absolute inset-0 overflow-hidden">
          {heroSlides.map((item, itemIndex) => {
            const state =
              itemIndex === index ? 'is-active' : itemIndex === leaving ? 'is-leaving' : ''
            return (
              <div key={item.image} className={`banner-slide absolute inset-0 ${state}`}>
                <img
                  src={item.image}
                  alt=""
                  fetchPriority={itemIndex === 0 ? 'high' : 'auto'}
                  decoding="async"
                  className="banner-image object-cover object-[center_right]"
                />
              </div>
            )
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(5,11,23,0.88)_0%,rgba(23,37,75,0.72)_42%,rgba(23,37,75,0.38)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,11,23,0.45)_100%)]" />

        <div className="banner-outline hidden sm:block">
          <span className="banner-outline-line" />
          <span className="banner-frame banner-frame-tl" />
          <span className="banner-frame banner-frame-tr" />
          <span className="banner-frame banner-frame-bl" />
          <span className="banner-frame banner-frame-br" />
          <p className="banner-side hidden lg:block">Faber Chimney</p>
        </div>

        <div className="custom_container relative z-10 flex min-h-[640px] items-center py-16 lg:min-h-[780px] lg:py-20">
          <div key={slide.title} className="max-w-2xl">
            <p className="banner-copy-item flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] text-secondary uppercase">
              <span className="banner-eyebrow-line h-px w-8 origin-left bg-secondary" />
              {slide.eyebrow}
            </p>

            <h1 className="mt-5">
              <span className="banner-title-mask">
                <span className="text-[38px] leading-[0.95] font-extrabold text-white sm:text-5xl lg:text-[58px]">
                  {slide.title}
                </span>
              </span>
              <span className="banner-title-mask is-second mt-1">
                <span className="text-[34px] leading-[0.95] font-extrabold tracking-tight text-secondary uppercase sm:text-5xl lg:text-[52px]">
                  {slide.highlight}
                </span>
              </span>
            </h1>

            <span className="banner-copy-item mt-5 inline-flex rounded-md bg-primary px-3.5 py-1.5 text-[12px] font-bold tracking-[0.14em] text-white uppercase">
              {slide.badge}
            </span>

            <p className="banner-copy-item mt-5 max-w-lg text-[15px] leading-7 text-white/70 sm:text-base">
              {slide.description}
            </p>

            <div className="banner-copy-item mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = highlightIcons[item.icon]
                return (
                  <div key={item.title} className="banner-feature flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-[11px] leading-4 font-bold tracking-[0.08em] text-white uppercase">
                      {item.title}
                      <span className="block">{item.subtitle}</span>
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="banner-copy-item mt-8 flex flex-wrap items-center gap-3">
              <a
                href={site.phoneHref}
                className="banner-cta inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-[12px] font-bold tracking-[0.14em] text-white uppercase"
              >
                <PhoneIcon className="size-4" />
                <span>Book Service</span>
              </a>
              <Link
                to="/services"
                className="banner-ghost inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-7 py-3.5 text-[12px] font-bold tracking-[0.14em] text-primary uppercase"
              >
                Our Services
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>

            <div className="banner-copy-item mt-10 flex items-center gap-3">
              {heroSlides.map((item, itemIndex) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show slide ${itemIndex + 1}`}
                  onClick={() => goTo(itemIndex)}
                  className={`relative h-px overflow-hidden transition-all duration-500 ${
                    itemIndex === index ? 'w-14 bg-white/20' : 'w-6 bg-white/20 hover:bg-white/40'
                  }`}
                >
                  {itemIndex === index ? (
                    <span key={`${item.title}-${index}`} className="banner-progress absolute inset-y-0 left-0 bg-secondary" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        <span key={slideNo} className="banner-index pointer-events-none absolute right-8 bottom-6 z-10 hidden md:block lg:right-16">
          {slideNo}
        </span>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="banner-control absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white md:flex lg:left-20"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="banner-control absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white md:flex lg:right-16"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  )
}
