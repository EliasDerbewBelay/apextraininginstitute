"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginForm() {
  const [email, setEmail] = useState<string | null>(null)

  if (email) {
    return (
      <div className="mt-8 space-y-4 rounded-2xl bg-neutral-50 px-5 py-6 text-sm leading-relaxed text-brand-ink">
        <p>
          Thanks. We will contact you at <span className="font-semibold">{email}</span> when
          sign-in opens.
        </p>
        <Link href="/join" className="font-semibold text-brand-purple hover:underline">
          Join a course in the meantime
        </Link>
      </div>
    )
  }

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setEmail(String(data.get("email") ?? ""))
      }}
    >
      <div className="space-y-2">
        <label htmlFor="login-email" className="text-sm font-medium text-brand-ink">
          Email
        </label>
        <Input
          id="login-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 px-3"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-brand-ink">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="current-password"
          className="h-11 px-3"
        />
      </div>
      <Button
        type="submit"
        className="h-11 w-full cursor-pointer rounded-lg bg-brand-purple text-white hover:bg-[#5b38ea]"
      >
        Login
      </Button>
    </form>
  )
}
