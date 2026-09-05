import { site } from '../../../data/site.js'
import { ClockIcon, LocationIcon, MailIcon, WhatsAppIcon } from '../../ui/AllSVG.jsx'

export default function TopToolbar() {
  return (
    <div className="bg-navy text-white">
      <div className="custom_container flex items-center justify-between gap-4 py-2 text-[11px] font-medium tracking-wide sm:py-2.5 sm:text-[12px]">
        <div className="flex min-w-0 items-center gap-3 text-white/75 sm:gap-5">
          <span className="inline-flex items-center gap-2">
            <LocationIcon className="size-3.5 shrink-0 text-accent" />
            <span className="truncate">{site.address}</span>
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <a href={site.emailHref} className="hidden items-center gap-2 transition hover:text-white sm:inline-flex">
            <MailIcon className="size-3.5 text-accent" />
            {site.email}
          </a>
          <span className="hidden h-3 w-px bg-white/15 xl:block" />
          <span className="hidden items-center gap-2 xl:inline-flex">
            <ClockIcon className="size-3.5 text-accent" />
            {site.hours}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-white"
          >
            <WhatsAppIcon className="size-3.5 text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-white sm:hidden"
          >
            Call
          </a>
          <span className="hidden rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-white uppercase md:inline-flex">
            Doorstep Service
          </span>
        </div>
      </div>
    </div>
  )
}
