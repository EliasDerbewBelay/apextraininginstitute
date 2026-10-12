import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6"
import { socialLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

const icons = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  tiktok: FaTiktok,
} as const

type SocialLinksProps = {
  className?: string
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3.5", className)}>
      {socialLinks.map((item) => {
        const Icon = icons[item.icon]
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="inline-flex rounded-sm text-current transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/70"
            >
              <Icon className="size-3.5" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
