import { useParams } from 'react-router-dom'

export default function ServiceDetailPage() {
  const { slug } = useParams()

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary">
        Service
      </h1>
      <p className="mt-3 text-black/70">
        Details for {slug?.replace(/-/g, ' ') || 'this service'}.
      </p>
    </section>
  )
}
