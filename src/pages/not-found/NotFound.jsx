import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="custom_container py-24 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-primary">Page not found</h1>
      <p className="mt-3 text-black/60">This page is not part of the site anymore.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white hover:bg-primary"
      >
        Back to Home
      </Link>
    </section>
  )
}
