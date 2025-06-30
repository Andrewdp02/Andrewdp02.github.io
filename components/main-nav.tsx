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
      <Link href="/" className="font-bold text-blue-700 text-xl lg:text-2xl">
        ADP
      </Link>
      <nav className="hidden gap-8 lg:gap-12 md:flex">
        {routes.map((route, i) => (
          <Link
            key={i}
            href={route.href}
            className={cn("font-medium transition-colors hover:text-blue-600 text-slate-700 text-lg")}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-blue-700">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-blue-50">
          <nav className="grid gap-6 text-lg font-medium mt-8">
            {routes.map((route, i) => (
              <Link
                key={i}
                href={route.href}
                className="hover:text-blue-600 text-slate-700 text-xl py-2"
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
