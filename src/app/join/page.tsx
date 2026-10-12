import type { Metadata } from "next"
import { Suspense } from "react"
import JoinForm from "@/components/forms/JoinForm"
import { courses, type Course } from "@/lib/site"

export const metadata: Metadata = {
  title: "Join Now",
  description: "Tell Apex Training Institute which course you want to join.",
}

type JoinPageProps = {
  searchParams: Promise<{ course?: string }>
}

export default function JoinPage({ searchParams }: JoinPageProps) {
  return (
    <section className="mx-auto max-w-md px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-brand-ink">Join Apex</h1>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">
        Tell us which course you want. We will contact you about the next intake.
      </p>
      <Suspense fallback={<p className="mt-8 text-sm text-brand-muted">Loading the form.</p>}>
        <JoinFormLoader searchParams={searchParams} />
      </Suspense>
    </section>
  )
}

async function JoinFormLoader({ searchParams }: JoinPageProps) {
  const { course } = await searchParams
  const match = courses.find((item) => item.slug === course)
  const defaultCourse: Course["slug"] = match?.slug ?? courses[0].slug

  return <JoinForm defaultCourse={defaultCourse} />
}
