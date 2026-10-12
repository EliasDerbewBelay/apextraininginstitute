import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import HeroSearch from "@/components/sections/HeroSearch"
import { buttonVariants } from "@/components/ui/button"
import { filterCourses } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Courses",
  description: "Finance, tax, accounting, and payroll courses from Apex Training Institute.",
}

type CoursesPageProps = {
  searchParams: Promise<{ q?: string }>
}

export default function CoursesPage({ searchParams }: CoursesPageProps) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
        Courses
      </h1>
      <p className="mt-3 max-w-2xl text-brand-muted">
        Practical classes for business owners, accountants, and finance professionals.
      </p>
      <Suspense fallback={<p className="mt-6 text-sm text-brand-muted">Loading courses.</p>}>
        <CourseResults searchParams={searchParams} />
      </Suspense>
    </section>
  )
}

async function CourseResults({ searchParams }: CoursesPageProps) {
  const { q = "" } = await searchParams
  const query = q.trim()
  const results = filterCourses(query)

  return (
    <>
      <HeroSearch className="mx-0 mt-6" defaultQuery={query} />
      {query ? (
        <p className="mt-6 text-sm text-brand-ink">
          {results.length === 1 ? "1 course matches" : `${results.length} courses match`} “{query}”.
        </p>
      ) : null}
      {results.length === 0 ? (
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-brand-muted">
          Nothing matches that search. Try tax, finance, accounting, or payroll.
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {results.map((course) => (
            <li key={course.slug}>
              <article
                id={course.slug}
                className="flex h-full scroll-mt-32 flex-col rounded-2xl border border-neutral-200 p-6 target:border-brand-purple target:ring-2 target:ring-brand-purple/20"
              >
                <h2 className="text-lg font-semibold text-brand-ink">{course.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {course.summary}
                </p>
                <p className="mt-4 text-sm text-brand-ink">{course.audience}</p>
                <Link
                  href={`/join?course=${course.slug}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-5 h-10 w-fit rounded-lg bg-brand-purple px-4 text-white hover:bg-[#5b38ea]",
                  )}
                >
                  Join this course
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
