import { useState } from 'react'
import PageHero from '../../components/ui/PageHero.jsx'
import { FaWhatsapp } from 'react-icons/fa'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { site } from '../../data/site.js'

const emptyForm = {
  name: '',
  phone: '',
  service: 'Chimney Repair',
  message: '',
}

export default function ContactUsPage() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get Professional"
        highlight="Chimney Repair"
        description="Call, WhatsApp, or send a message and we will schedule a convenient doorstep visit."
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a href={site.phoneHref} className="flex items-center gap-4 rounded-3xl bg-white p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-secondary">
                <LuPhone className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-black/40 uppercase">Call</p>
                <p className="font-bold text-primary">{site.phone}</p>
              </div>
            </a>
            <a href={site.whatsappHref} className="flex items-center gap-4 rounded-3xl bg-white p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-secondary">
                <FaWhatsapp className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-black/40 uppercase">WhatsApp</p>
                <p className="font-bold text-primary">Book on WhatsApp</p>
              </div>
            </a>
            <a href={site.emailHref} className="flex items-center gap-4 rounded-3xl bg-white p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-secondary">
                <LuMail className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-black/40 uppercase">Email</p>
                <p className="font-bold text-primary">{site.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-3xl bg-white p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-secondary">
                <LuMapPin className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-black/40 uppercase">Location</p>
                <p className="font-bold text-primary">{site.address}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white">
              <iframe
                title="Faber Chimney service area in Kolkata"
                src={site.mapSrc}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Send a message</h2>
            <p className="mt-2 text-sm text-black/55">
              Tell us about the issue and we will get back to you shortly.
            </p>
            <label className="mt-6 block text-sm font-semibold text-primary">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="mt-2 w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="mt-4 block text-sm font-semibold text-primary">
              Phone
              <input
                required
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="mt-2 w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="mt-4 block text-sm font-semibold text-primary">
              Service
              <select
                value={form.service}
                onChange={(event) => setForm({ ...form, service: event.target.value })}
                className="mt-2 w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none focus:border-primary"
              >
                <option>Chimney Repair</option>
                <option>Low Suction Problem</option>
                <option>Chimney Motor Repair</option>
                <option>Electrical Problem</option>
                <option>Cleaning & Maintenance</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-semibold text-primary">
              Message
              <textarea
                rows={4}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="mt-2 w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-secondary py-3.5 text-sm font-bold text-white hover:bg-primary"
            >
              Submit Request
            </button>
            {sent ? (
              <p className="mt-3 text-sm font-semibold text-primary">
                Thanks. Your request has been received.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  )
}
