import { site } from '../../../data/site.js'
import { FaWhatsapp } from 'react-icons/fa'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'

export default function TopToolbar() {
  return (
    <div className="bg-navy text-white">
      <div className="custom_container flex items-center justify-between gap-4 py-2 text-[11px] font-medium tracking-wide sm:py-2.5 sm:text-[12px]">
        <div className="flex min-w-0 items-center gap-3 text-white/75 sm:gap-5">
          <span className="inline-flex items-center gap-2">
            <LuMapPin className="size-3.5 shrink-0 text-accent" />
            <span className="truncate">{site.address}</span>
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <a href={site.emailHref} className="hidden items-center gap-2 transition hover:text-white sm:inline-flex">
            <LuMail className="size-3.5 text-accent" />
            {site.email}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <a
            href={site.toolbarPhoneHref}
            className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-white"
          >
            <LuPhone className="size-3.5 text-accent" />
            <span>{site.toolbarPhone}</span>
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-white"
          >
            <FaWhatsapp className="size-3.5 text-[#25D366]" />
            <span className="hidden sm:inline">{site.whatsapp}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
