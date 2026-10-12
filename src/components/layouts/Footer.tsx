import { site } from "@/lib/site"
import Logo from "@/components/layouts/Logo"
import SocialLinks from "@/components/layouts/SocialLinks"

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo tone="light" />
        <div className="flex flex-col gap-3 text-sm text-white/80 sm:items-end">
          <SocialLinks />
          <a href={site.phoneHref} className="hover:text-white">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
