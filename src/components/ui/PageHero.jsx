export default function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="bg-primary px-6 py-16 text-white sm:py-20">
      <div className="custom_container">
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}{' '}
          {highlight ? <span className="text-secondary">{highlight}</span> : null}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
