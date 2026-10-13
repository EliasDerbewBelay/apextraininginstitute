import Image from "next/image"
import { cn } from "@/lib/utils"

const portraits = [
  {
    src: "/images/woman-with-books.jpeg",
    alt: "Student holding a stack of textbooks and wearing a backpack",
    frame: "md:mt-0",
    radius:
      "rounded-tl-[1.7rem] rounded-tr-[1.45rem] rounded-br-[1.7rem] rounded-bl-[4.6rem]",
    image: "origin-top scale-[1.9] object-top",
  },
  {
    src: "/images/man-with-books.jpeg",
    alt: "Student holding notebooks and a pen",
    frame: "md:mt-20",
    radius:
      "rounded-tl-[1.3rem] rounded-tr-[3.6rem] rounded-br-[1.45rem] rounded-bl-[1.5rem]",
    image: "origin-[center_15%] scale-[1.18] object-[center_20%]",
  },
  {
    src: "/images/student-with-books.jpeg",
    alt: "Young student in a school uniform holding textbooks",
    frame: "z-20 md:-ml-16 md:mt-32",
    radius: "rounded-[1.85rem]",
    image: "origin-top scale-[1.55] object-[center_12%]",
  },
  {
    src: "/images/man-with-laptop.jpeg",
    alt: "Student holding an open laptop",
    frame: "md:mt-3",
    radius:
      "rounded-tl-[1.55rem] rounded-tr-[1.7rem] rounded-br-[5.1rem] rounded-bl-[1.4rem]",
    image: "origin-[center_25%] scale-[1.15] object-[center_22%]",
  },
] as const

export default function HeroPortraits() {
  return (
    <div className="relative z-10 mx-auto mt-12 w-full max-w-5xl px-4 pb-10 sm:mt-16">
      <div className="grid grid-cols-2 items-start justify-items-center gap-x-4 gap-y-5 md:flex md:justify-center md:gap-5">
        {portraits.map((portrait, index) => (
          <figure
            key={portrait.src}
            className={cn(
              "relative aspect-[5/6] w-full max-w-[240px] overflow-hidden shadow-[0_16px_40px_rgba(26,22,48,0.08)] ring-1 ring-black/5 md:w-[228px] md:shrink-0",
              portrait.radius,
              portrait.frame,
            )}
          >
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 768px) 46vw, 228px"
              className={cn("object-cover", portrait.image)}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
