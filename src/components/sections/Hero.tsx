import HeroDecor from "@/components/sections/HeroDecor"
import HeroPortraits from "@/components/sections/HeroPortraits"
import HeroSearch from "@/components/sections/HeroSearch"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-8 sm:pt-16">
      <HeroDecor />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <h1 className="text-balance text-[2.15rem] leading-[1.12] font-extrabold tracking-[-0.03em] text-brand-ink sm:text-5xl md:text-[3.25rem]">
          Learn finance. Understand
          <br className="hidden sm:block" /> tax. Grow with{" "}
          <span className="text-brand-orange">apex.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-brand-muted sm:text-base">
          Comprehensive, practical, and up-to-date courses designed for business owners,
          accountants, and finance professionals.
        </p>
        <HeroSearch />
      </div>
      <HeroPortraits />
    </section>
  )
}
