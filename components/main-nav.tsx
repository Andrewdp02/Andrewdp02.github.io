"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#resume",
      label: "Resume",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ]

  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/" className="font-bold text-blue-700 text-lg">
        ADP
      </Link>
      <nav className="hidden gap-6 md:flex">
        {routes.map((route, i) => (
          <Link
            key={i}
            href={route.href}
            className={cn("text-sm font-medium transition-colors hover:text-blue-600 text-slate-700")}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-blue-700">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-blue-50">
          <nav className="grid gap-6 text-lg font-medium">
            {routes.map((route, i) => (
              <Link
                key={i}
                href={route.href}
                className="hover:text-blue-600 text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
