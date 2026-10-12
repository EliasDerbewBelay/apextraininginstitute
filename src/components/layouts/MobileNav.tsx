"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, User, X } from "lucide-react"
import { courses } from "@/lib/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 place-items-center rounded-lg text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-neutral-200 bg-white px-4 py-4 shadow-lg"
        >
          <p className="px-3 text-xs font-medium text-brand-muted">Courses</p>
          <nav className="mt-1 flex flex-col" aria-label="Mobile">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses#${course.slug}`}
                onClick={close}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-neutral-50"
              >
                {course.title}
              </Link>
            ))}
            <Link
              href="/#course-search"
              onClick={close}
              className="mt-1 inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-neutral-50"
            >
              <Search className="size-4" />
              Search courses
            </Link>
            <Link
              href="/login"
              onClick={close}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-neutral-50"
            >
              <User className="size-4" />
              Login
            </Link>
            <Link
              href="/join"
              onClick={close}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-2 h-11 justify-center rounded-lg bg-brand-purple text-white hover:bg-[#5b38ea]",
              )}
            >
              Join Now
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
