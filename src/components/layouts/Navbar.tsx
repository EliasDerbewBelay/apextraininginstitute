import Link from "next/link"
import { Search, User } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CoursesMenu from "@/components/layouts/CoursesMenu"
import Logo from "@/components/layouts/Logo"
import MobileNav from "@/components/layouts/MobileNav"

export default function Navbar() {
  return (
    <div className="relative border-b border-neutral-100 bg-white">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6 md:gap-8">
          <Logo />
          <div className="hidden items-center gap-2 md:flex">
            <CoursesMenu />
            <Link
              href="/#course-search"
              aria-label="Search courses"
              className="grid size-9 place-items-center rounded-full text-brand-ink hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
            >
              <Search className="size-4" />
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-brand-ink hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
          >
            <User className="size-4" />
            Login
          </Link>
          <Link
            href="/join"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-lg bg-brand-purple px-5 text-sm font-semibold text-white hover:bg-[#5b38ea]",
            )}
          >
            Join Now
          </Link>
        </div>
        <MobileNav />
      </div>
    </div>
  )
}
