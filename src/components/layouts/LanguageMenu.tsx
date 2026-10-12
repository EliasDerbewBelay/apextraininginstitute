"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages } from "@/lib/site"

export default function LanguageMenu() {
  const [language, setLanguage] = useState<(typeof languages)[number]["value"]>("en")
  const current = languages.find((item) => item.value === language) ?? languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-1 py-1 text-[13px] text-white outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        {current.label}
        <ChevronDown className="size-3.5 opacity-80" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuRadioGroup value={language} onValueChange={(value) => setLanguage(value)}>
          {languages.map((item) => (
            <DropdownMenuRadioItem key={item.value} value={item.value} closeOnClick>
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
