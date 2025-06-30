import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-gradient-to-r from-blue-50 to-sky-100 py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:h-20 md:flex-row max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-center text-slate-600 md:text-left text-lg">
          © {new Date().getFullYear()} Andrew Della Penna. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://github.com/andrewdp02" className="text-slate-500 hover:text-blue-600 transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/andrew-della-penna" className="text-slate-500 hover:text-sky-600 transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:adellapenna02@gmail.com" className="text-slate-500 hover:text-cyan-600 transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
