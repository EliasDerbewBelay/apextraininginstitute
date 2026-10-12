import type { Metadata } from "next"
import LoginForm from "@/components/forms/LoginForm"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Apex Training Institute.",
}

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-brand-ink">Login</h1>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">
        Use the email you registered with. Sign-in opens when your account is ready.
      </p>
      <LoginForm />
    </section>
  )
}
