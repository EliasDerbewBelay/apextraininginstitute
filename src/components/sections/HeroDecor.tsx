export default function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <span className="absolute top-[17%] left-[15%] hidden size-0 border-y-[18px] border-l-[30px] border-y-transparent border-l-brand-pink opacity-80 md:block" />
      <span className="absolute top-[13%] left-[21%] hidden size-3 rotate-12 rounded-[3px] bg-[#c4b5fd] opacity-40 md:block" />
      <span className="absolute bottom-[22%] left-[5%] size-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-brand-sky opacity-40" />
      <span className="absolute right-[9%] bottom-[30%] size-3.5 rotate-12 rounded-[3px] bg-[#c4b5fd] opacity-40" />
      <span className="absolute right-[18%] bottom-[18%] size-2 rounded-full bg-brand-orange opacity-20" />
      <span className="absolute -left-8 bottom-[8%] size-28 rounded-full border-2 border-brand-sky opacity-30" />
      <span className="absolute -right-12 bottom-[4%] size-40 rounded-full border-2 border-brand-orange opacity-20" />

      <svg
        className="absolute bottom-[2%] left-0 w-[min(46vw,320px)] opacity-70"
        viewBox="0 0 320 180"
        fill="none"
      >
        <path
          d="M-10 150C70 150 90 36 180 46C250 54 280 96 340 74"
          stroke="#7ec8f2"
          strokeWidth="1.6"
        />
        <path
          d="M-16 118C64 132 108 72 196 80C268 86 304 42 368 54"
          stroke="#f5a024"
          strokeWidth="1.6"
        />
      </svg>
      <svg
        className="absolute right-0 bottom-[1%] w-[min(52vw,380px)] opacity-70"
        viewBox="0 0 380 210"
        fill="none"
      >
        <path
          d="M-20 48C70 8 130 92 214 78C292 66 330 24 420 46"
          stroke="#7ec8f2"
          strokeWidth="1.6"
        />
        <path
          d="M-8 96C86 42 150 118 242 104C322 92 348 52 430 84"
          stroke="#f5a024"
          strokeWidth="1.6"
        />
        <path
          d="M48 168C132 124 190 156 278 132"
          stroke="#c4b5fd"
          strokeWidth="1.5"
          opacity="0.8"
        />
      </svg>
    </div>
  )
}
