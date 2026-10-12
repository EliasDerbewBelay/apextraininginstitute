import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = {
  tone?: "dark" | "light"
}

export default function Logo({ tone = "dark" }: LogoProps) {
  const onDark = tone === "light"

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
    >
      <svg viewBox="0 0 36 36" className="size-9 shrink-0" aria-hidden>
        <circle cx="18" cy="18" r="17" fill={onDark ? "#ffffff" : "#0d0b24"} />
        <path
          d="M18 8.5 27 24.5H9L18 8.5Z"
          fill="none"
          stroke={onDark ? "#0d0b24" : "white"}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 19.5h9"
          stroke="#f5a024"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[15px] font-extrabold tracking-[0.14em]",
            onDark ? "text-white" : "text-brand-ink",
          )}
        >
          APEX
        </span>
        <span
          className={cn(
            "mt-1 block text-[9px] font-semibold tracking-[0.2em]",
            onDark ? "text-white/65" : "text-brand-muted",
          )}
        >
          TRAINING
        </span>
      </span>
    </Link>
  )
}
