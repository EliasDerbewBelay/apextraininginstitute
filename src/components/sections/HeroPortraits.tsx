import Image from "next/image"
import { cn } from "@/lib/utils"

const portraits = [
  {
    src: "/images/woman-with-books.jpeg",
    alt: "Student holding a stack of textbooks and wearing a backpack",
    frame: "md:-translate-y-14",
    image: "origin-top scale-[1.9] object-top",
  },
  {
    src: "/images/man-with-books.jpeg",
    alt: "Student holding notebooks and a pen",
    frame: "md:translate-y-3",
    image: "origin-[center_15%] scale-[1.18] object-[center_20%]",
  },
  {
    src: "/images/student-with-books.jpeg",
    alt: "Young student in a school uniform holding textbooks",
    frame: "z-20 md:-mx-5 md:translate-y-12",
    image: "origin-top scale-[1.55] object-[center_12%]",
  },
  {
    src: "/images/man-with-laptop.jpeg",
    alt: "Student holding an open laptop",
    frame: "md:-translate-y-8",
    image: "origin-[center_25%] scale-[1.15] object-[center_22%]",
  },
] as const

export default function HeroPortraits() {
  return (
    <div className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-4 pt-16 pb-20 sm:mt-12">
      <div className="grid grid-cols-2 items-end justify-items-center gap-x-4 gap-y-5 md:flex md:justify-center md:gap-4">
        {portraits.map((portrait, index) => (
          <figure
            key={portrait.src}
            className={cn(
              "relative aspect-[4/5] w-full max-w-[230px] overflow-hidden rounded-[1.7rem] shadow-[0_16px_40px_rgba(26,22,48,0.08)] ring-1 ring-black/5 md:w-[230px] md:shrink-0",
              portrait.frame,
            )}
          >
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 768px) 46vw, 230px"
              className={cn("object-cover", portrait.image)}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
