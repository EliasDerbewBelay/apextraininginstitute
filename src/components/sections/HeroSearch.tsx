import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type HeroSearchProps = {
  className?: string
  defaultQuery?: string
}

export default function HeroSearch({ className, defaultQuery = "" }: HeroSearchProps) {
  return (
    <form action="/courses" className={cn("relative mx-auto mt-8 w-full max-w-xl", className)}>
      <label htmlFor="course-search" className="sr-only">
        What do you want to learn
      </label>
      <Input
        id="course-search"
        name="q"
        defaultValue={defaultQuery}
        placeholder="What do you want to learn"
        autoComplete="off"
        className="h-14 rounded-full border-neutral-200 bg-white px-6 pr-36 text-[15px] shadow-[0_8px_30px_rgba(26,22,48,0.05)] focus-visible:border-brand-orange/50 focus-visible:ring-brand-orange/20 md:text-[15px]"
      />
      <Button
        type="submit"
        className="absolute top-1/2 right-1.5 h-11 -translate-y-1/2 cursor-pointer rounded-full bg-[#c56e08] px-5 text-sm font-bold text-white hover:bg-[#a35e00]"
      >
        <Search className="size-4" />
        Search
      </Button>
    </form>
  )
}
