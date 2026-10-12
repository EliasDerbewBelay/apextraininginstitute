export const site = {
  name: "Apex Training Institute",
  shortName: "Apex",
  phone: "+251995958351",
  phoneHref: "tel:+251995958351",
  email: "info@apexfinancialsethiopia.com",
} as const

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
] as const

export const languages = [
  { value: "en", label: "English" },
  { value: "am", label: "Amharic" },
] as const

export const courses = [
  {
    slug: "financial-accounting",
    title: "Financial Accounting",
    topic: "accounting",
    audience: "Accountants and business owners",
    summary:
      "Record transactions, prepare statements, and close the books with a process you can repeat every month.",
  },
  {
    slug: "ethiopian-tax",
    title: "Ethiopian Tax Practice",
    topic: "tax",
    audience: "Finance professionals",
    summary:
      "Apply income tax, VAT, and filing rules that Ethiopian businesses actually use.",
  },
  {
    slug: "business-finance",
    title: "Business Finance",
    topic: "finance",
    audience: "Business owners",
    summary:
      "Plan cash flow, price decisions, and see what the numbers mean for growth.",
  },
  {
    slug: "payroll-vat",
    title: "Payroll and VAT",
    topic: "payroll",
    audience: "Accountants",
    summary:
      "Run payroll and VAT returns with a checklist that holds up at month end.",
  },
] as const

export type Course = (typeof courses)[number]

export function filterCourses(query: string) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return [...courses]

  return courses.filter((course) =>
    [course.title, course.summary, course.audience, course.topic].some((value) =>
      value.toLowerCase().includes(normalized),
    ),
  )
}
