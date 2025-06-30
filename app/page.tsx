import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { PDFViewer } from "@/components/pdf-viewer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <header className="sticky top-0 z-40 w-full border-b border-blue-200 bg-blue-50/80 backdrop-blur supports-[backdrop-filter]:bg-blue-50/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-sky-200 shadow-lg md:h-60 md:w-60">
              <Image
                src="/durv-0002.jpg?height=240&width=240"
                width={240}
                height={240}
                alt="Profile"
                className="object-cover object-top"
                priority
              />
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Andrew Della Penna
            </h1>
            <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
              Software Engineer based in Arlington, VA
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white border-0 shadow-md"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-white/70 backdrop-blur"
              >
                <Link href="#resume">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
              I'm a passionate software engineer with over 5 years of experience building web applications. My expertise
              includes React, TypeScript, and modern web frameworks. I enjoy solving complex problems and creating
              intuitive user experiences.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-sky-100 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-blue-800">Skills</h3>
                  <p className="text-sm text-blue-700">
                  Java, Python, C++, C, JavaScript, Typescript, Angular, React, Amazon Web Services (AWS), PostgreSQL, APIs, REST,NLP, Agile Methodology, Cucumber Framework, Cypress, Google Firebase, Quartus, VHDL, AVR Assembly Language, Microsoft Excel
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-100 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-sky-800">Education</h3>
                  <p className="text-sm text-sky-700">
                    B.E. Computer Engineering 
                    <br />
                    Minors in Data Science and Engineering Management
                    <br />
                    Vanderbilt University, Nashville, TN
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-100 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-cyan-800">Interests</h3>
                  <p className="text-sm text-cyan-700">Software Engineering, Data Science, Backend, Full Stack, Machine Learning, Artificial Intelligence, AWS, Cloud, Project Management, Consulting, Finance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="resume"
          className="container space-y-6 bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
              My professional experience and qualifications
            </p>
          </div>
          <div className="mx-auto max-w-4xl w-full px-4">
            <PDFViewer pdfUrl="/Andrew Della Penna '25 Resume.pdf" />
          </div>
        </section>

        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
              Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-blue-50 to-sky-50 border-blue-300 text-blue-700 hover:from-blue-100 hover:to-sky-100 shadow-sm"
              >
                <Link href="mailto:adellapenna02@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  adellapenna02@gmail.com
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-sky-50 to-cyan-50 border-sky-300 text-sky-700 hover:from-sky-100 hover:to-cyan-100 shadow-sm"
              >
                <Link href="https://github.com/andrewdp02" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-300 text-cyan-700 hover:from-cyan-100 hover:to-blue-100 shadow-sm"
              >
                <Link href="https://www.linkedin.com/in/andrew-della-penna" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
