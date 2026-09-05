import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, EffectFade, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { heroSlides, highlights, site } from '../../data/site.js'
import {
  LuArrowRight,
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuPhone,
  LuShield,
  LuWrench,
} from 'react-icons/lu'

import 'swiper/css'
import 'swiper/css/effect-fade'

const highlightIcons = {
  wrench: LuWrench,
  clock: LuClock,
  shield: LuShield,
}

const SLIDE_MS = 7000

export default function HomeBanner() {
  const swiperRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = heroSlides[index]
  const slideNo = String(index + 1).padStart(2, '0')

  const withSwiper = (run) => {
    const swiper = swiperRef.current
    if (!swiper || swiper.destroyed) return
    swiper.allowClick = true
    run(swiper)
  }

  const goTo = (next) => {
    withSwiper((swiper) => swiper.slideToLoop(next))
  }

  const goPrev = (event) => {
    event.stopPropagation()
    withSwiper((swiper) => swiper.slidePrev())
  }

  const goNext = (event) => {
    event.stopPropagation()
    withSwiper((swiper) => swiper.slideNext())
  }

  return (
    <section
      className={`banner-stage relative overflow-hidden bg-navy ${paused ? 'banner-is-paused' : ''}`}
      onMouseEnter={() => {
        setPaused(true)
        swiperRef.current?.autoplay?.pause()
      }}
      onMouseLeave={() => {
        setPaused(false)
        swiperRef.current?.autoplay?.resume()
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        loop
        loopPreventsSliding={false}
        preventClicks={false}
        preventClicksPropagation={false}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: SLIDE_MS,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        className="banner-swiper"
      >
        {heroSlides.map((item, itemIndex) => (
          <SwiperSlide key={item.image}>
            <img
              src={item.image}
              alt=""
              fetchPriority={itemIndex === 0 ? 'high' : 'auto'}
              decoding="async"
              className="banner-image object-cover object-[center_right]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

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

      <div className="custom_container pointer-events-none relative z-10 flex min-h-160 items-center py-16 lg:min-h-195 lg:py-20">
        <div key={slide.title} className="pointer-events-auto max-w-2xl">
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
              <LuPhone className="size-4" />
              <span>Book Service</span>
            </a>
            <Link
              to="/services"
              className="banner-ghost inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-7 py-3.5 text-[12px] font-bold tracking-[0.14em] text-primary uppercase"
            >
              Our Services
              <LuArrowRight className="size-4" />
            </Link>
          </div>

          <div className="banner-copy-item mt-10 flex items-center gap-3">
            {heroSlides.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show slide ${itemIndex + 1}`}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => goTo(itemIndex)}
                className="flex h-8 items-center"
              >
                <span
                  className={`relative block h-px overflow-hidden transition-all duration-500 ${
                    itemIndex === index ? 'w-14 bg-white/20' : 'w-6 bg-white/20 hover:bg-white/40'
                  }`}
                >
                  {itemIndex === index ? (
                    <span
                      key={`${item.title}-${index}`}
                      className="banner-progress absolute inset-y-0 left-0 bg-secondary"
                    />
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <span
        key={slideNo}
        className="banner-index pointer-events-none absolute right-8 bottom-6 z-10 hidden md:block lg:right-16"
      >
        {slideNo}
      </span>

      <button
        type="button"
        aria-label="Previous slide"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={goPrev}
        className="banner-control absolute top-1/2 left-4 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white md:flex lg:left-20"
      >
        <LuChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={goNext}
        className="banner-control absolute top-1/2 right-4 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white md:flex lg:right-16"
      >
        <LuChevronRight className="size-5" />
      </button>
    </section>
  )
}
