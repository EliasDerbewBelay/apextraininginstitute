import { Globe, Mail, Phone } from "lucide-react"
import { site } from "@/lib/site"
import LanguageMenu from "@/components/layouts/LanguageMenu"
import SocialLinks from "@/components/layouts/SocialLinks"

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-white">
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-4 text-[13px]">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-sm hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden />
            <span>{site.phone}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden min-w-0 items-center gap-1.5 truncate rounded-sm hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:inline-flex"
          >
            <Mail className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">{site.email}</span>
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <SocialLinks className="hidden sm:flex" />
          <Globe className="hidden size-3.5 sm:block" aria-hidden />
          <LanguageMenu />
        </div>
      </div>
    </div>
  )
}
