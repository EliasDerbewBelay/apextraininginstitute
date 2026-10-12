import Link from "next/link"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { courses } from "@/lib/site"

export default function CoursesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-brand-ink outline-none hover:text-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/40"
      >
        Courses
        <ChevronDown className="size-4 text-brand-muted" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60">
        {courses.map((course) => (
          <DropdownMenuItem
            key={course.slug}
            closeOnClick
            className="px-2.5 py-2"
            render={<Link href={`/courses#${course.slug}`} />}
          >
            {course.title}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          closeOnClick
          className="px-2.5 py-2 font-medium"
          render={<Link href="/courses" />}
        >
          Browse all courses
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
