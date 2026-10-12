import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Footer from "@/components/layouts/Footer"
import Navbar from "@/components/layouts/Navbar"
import TopBar from "@/components/layouts/TopBar"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Apex Training Institute",
    template: "%s · Apex Training Institute",
  },
  description:
    "Comprehensive, practical, and up-to-date finance and tax courses for business owners, accountants, and finance professionals.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", jakarta.variable, "font-sans")}>
      <body className="flex min-h-full flex-col bg-white text-brand-ink">
        <header className="sticky top-0 z-40">
          <TopBar />
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
