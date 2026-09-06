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
    <section className="banner-stage relative overflow-hidden bg-navy">
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
          pauseOnMouseEnter: false,
        }}
        allowTouchMove
        simulateTouch
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
              className="banner-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="banner-wash pointer-events-none absolute inset-0" />

      <div className="banner-outline hidden sm:block">
        <span className="banner-outline-line" />
        <span className="banner-frame banner-frame-tl" />
        <span className="banner-frame banner-frame-tr" />
        <span className="banner-frame banner-frame-bl" />
        <span className="banner-frame banner-frame-br" />
        <p className="banner-side hidden lg:block">Faber Chimney</p>
      </div>

      <div className="banner-copy custom_container pointer-events-none relative z-10 flex items-end py-8 sm:min-h-140 sm:items-center sm:py-14 lg:min-h-170 lg:py-16">
        <div key={slide.title} className="pointer-events-auto w-full max-w-2xl">
          <p className="banner-copy-item flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-secondary uppercase sm:text-[12px] sm:tracking-[0.22em]">
            <span className="banner-eyebrow-line h-px w-8 origin-left bg-secondary" />
            {slide.eyebrow}
          </p>

          <h1 className="mt-2 sm:mt-3">
            <span className="banner-title-mask">
              <span className="text-[32px] leading-[0.95] font-extrabold text-white sm:text-5xl lg:text-[58px]">
                {slide.title}
              </span>
            </span>
            <span className="banner-title-mask is-second mt-1">
              <span className="text-[28px] leading-[0.95] font-extrabold tracking-tight text-secondary uppercase sm:text-5xl lg:text-[52px]">
                {slide.highlight}
              </span>
            </span>
          </h1>

          <span className="banner-copy-item mt-2.5 inline-flex rounded-md bg-primary px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white uppercase sm:mt-3 sm:px-3.5 sm:text-[12px]">
            {slide.badge}
          </span>

          <p className="banner-copy-item mt-2.5 max-w-lg text-[14px] leading-6 text-white/78 sm:mt-3 sm:text-base">
            {slide.description}
          </p>

          <div className="banner-copy-item mt-4 hidden grid-cols-3 gap-2 sm:mt-5 sm:grid sm:gap-3">
            {highlights.map((item) => {
              const Icon = highlightIcons[item.icon]
              return (
                <div key={item.title} className="banner-feature flex min-w-0 items-center gap-2 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white sm:h-10 sm:w-10">
                    <Icon className="size-4" />
                  </span>
                  <p className="min-w-0 text-[10px] leading-3.5 font-bold tracking-[0.06em] text-white uppercase sm:text-[11px] sm:leading-4 sm:tracking-[0.08em]">
                    {item.title}
                    <span className="block">{item.subtitle}</span>
                  </p>
                </div>
              )
            })}
          </div>

          <div className="banner-copy-item mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5">
            <a
              href={site.phoneHref}
              className="banner-cta hidden items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-[12px] font-bold tracking-[0.14em] text-white uppercase sm:inline-flex"
            >
              <LuPhone className="size-4" />
              <span>Book Service</span>
            </a>
            <Link
              to="/services"
              className="banner-ghost inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white px-7 py-3.5 text-[12px] font-bold tracking-[0.14em] text-primary uppercase sm:w-auto"
            >
              Our Services
              <LuArrowRight className="size-4" />
            </Link>
          </div>

          <div className="banner-copy-item banner-pager mt-5 sm:mt-6">
            <div className="banner-pager-dots">
              {heroSlides.map((item, itemIndex) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show slide ${itemIndex + 1}`}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => goTo(itemIndex)}
                  className={`banner-pager-dot${itemIndex === index ? ' is-active' : ''}`}
                >
                  {itemIndex === index ? (
                    <span key={`${item.title}-${index}`} className="banner-progress" />
                  ) : null}
                </button>
              ))}
            </div>
            <div className="banner-pager-arrows sm:hidden">
              <button
                type="button"
                aria-label="Previous slide"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={goPrev}
                className="banner-control banner-pager-btn"
              >
                <LuChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={goNext}
                className="banner-control banner-pager-btn"
              >
                <LuChevronRight className="size-5" />
              </button>
            </div>
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
        className="banner-control absolute top-1/2 left-4 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/40 text-white sm:flex lg:left-20"
      >
        <LuChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={goNext}
        className="banner-control absolute top-1/2 right-4 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/40 text-white sm:flex lg:right-16"
      >
        <LuChevronRight className="size-5" />
      </button>
    </section>
  )
}
