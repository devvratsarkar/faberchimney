import PageHero from '../../components/ui/PageHero.jsx'
import { StarIcon } from '../../components/ui/AllSVG.jsx'
import { testimonials } from '../../data/site.js'

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Customers"
        highlight="Say About Us"
        description="Our customers trust us for professional and reliable chimney repair services."
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl bg-white p-6">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <StarIcon key={`${item.name}-${index}`} className="size-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-black/65">{item.review}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.initials}
                </span>
                <div>
                  <p className="font-bold text-primary">{item.name}</p>
                  <p className="text-xs text-black/50">
                    {item.location} · {item.service}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
