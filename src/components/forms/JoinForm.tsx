"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { courses, type Course } from "@/lib/site"

type JoinFormProps = {
  defaultCourse: Course["slug"]
}

export default function JoinForm({ defaultCourse }: JoinFormProps) {
  const [course, setCourse] = useState<Course["slug"]>(defaultCourse)
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null)
  const selected = courses.find((item) => item.slug === course) ?? courses[0]

  if (submittedEmail) {
    return (
      <p className="mt-8 rounded-2xl bg-neutral-50 px-5 py-6 text-sm leading-relaxed text-brand-ink">
        Thanks. We will contact you at <span className="font-semibold">{submittedEmail}</span>{" "}
        about {selected.title}.
      </p>
    )
  }

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email = String(data.get("email") ?? "")
        setSubmittedEmail(email)
      }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-brand-ink">
          Full name
        </label>
        <Input id="name" name="name" required autoComplete="name" className="h-11 px-3" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-brand-ink">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 px-3"
        />
      </div>
      <div className="space-y-2">
        <span id="course-label" className="text-sm font-medium text-brand-ink">
          Course
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger
            type="button"
            aria-labelledby="course-label"
            className="flex h-11 w-full items-center justify-between rounded-lg border border-input bg-transparent px-3 text-sm text-brand-ink outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {selected.title}
            <ChevronDown className="size-4 text-brand-muted" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-80">
            <DropdownMenuRadioGroup
              value={course}
              onValueChange={(value) => setCourse(value as Course["slug"])}
            >
              {courses.map((item) => (
                <DropdownMenuRadioItem key={item.slug} value={item.slug} closeOnClick>
                  {item.title}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        type="submit"
        className="h-11 w-full cursor-pointer rounded-lg bg-brand-purple text-white hover:bg-[#5b38ea]"
      >
        Join this course
      </Button>
    </form>
  )
}
