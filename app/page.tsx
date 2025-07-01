import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { PDFViewer } from "@/components/pdf-viewer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <header className="sticky top-0 z-40 w-full border-b border-blue-200 bg-blue-50/80 backdrop-blur supports-[backdrop-filter]:bg-blue-50/60">
        <div className="container flex h-16 items-center max-w-7xl mx-auto">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 xl:py-40">
          <div className="container flex max-w-6xl mx-auto flex-col items-center gap-6 text-center px-4 lg:px-8">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-sky-200 shadow-lg md:h-60 md:w-60 lg:h-72 lg:w-72">
              <Image
                src="/durv-0002.jpg?height=288&width=288"
                width={288}
                height={288}
                alt="Profile"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="space-y-4 max-w-4xl">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                Andrew Della Penna
              </h1>
              <p className="max-w-3xl mx-auto leading-normal text-slate-700 text-lg sm:text-xl lg:text-2xl sm:leading-8">
                Software Engineer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white border-0 shadow-md px-8 py-3 text-lg"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-white/70 backdrop-blur px-8 py-3 text-lg"
              >
                <Link href="#resume">
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container space-y-8 py-16 md:py-20 lg:py-32 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent leading-tight">
              About Me
            </h2>
            <p className="max-w-3xl leading-relaxed text-slate-700 text-lg sm:text-xl lg:text-2xl sm:leading-8">
              I am a May 2024 graduate from Vanderbilt University with a Bachelor of Engineering in Computer Engineering and minors in Data Science and Engineering Management. As an AWS Certified Solutions Architect Associate, I have a strong foundation in cloud computing and backend development. I am passionate about building robust, scalable software solutions and thrive in collaborative environments where I can tackle complex challenges.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mt-12">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-sky-100 shadow-md hover:shadow-lg transition-all hover:scale-105 p-2">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-blue-800 text-xl">Skills</h3>
                  <p className="text-blue-700 leading-relaxed">
                    Java, Python, C++, C, JavaScript, Typescript, Angular, React, Amazon Web Services (AWS), PostgreSQL, APIs, REST, Splunk, AI, NLP, Agile Methodology, Cypress, Google Firebase
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-100 shadow-md hover:shadow-lg transition-all hover:scale-105 p-2">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-sky-800 text-xl">Education</h3>
                  <div>
                    <p className="font-semibold text-sky-800">B.E. Computer Engineering</p>
                    <p className="text-sky-700">Minors in Data Science and Engineering Management</p>
                    <p className="text-sm text-sky-600">Vanderbilt University, Nashville, TN</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-100 shadow-md hover:shadow-lg transition-all hover:scale-105 p-2 sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-cyan-800 text-xl">Interests</h3>
                  <p className="text-cyan-700 leading-relaxed">Backend, Full Stack, Computer Engineering, Data Science, ML, AI, AWS, Cloud, FPGAs, Project Management, Finance, Weightlifting, Cooking</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          className="container space-y-8 bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 py-16 md:py-20 lg:py-32 max-w-full"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center px-4 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent leading-tight">
              Resume
            </h2>
            <p className="max-w-3xl leading-relaxed text-slate-700 text-lg sm:text-xl lg:text-2xl sm:leading-8">
              My professional experience and qualifications
            </p>
          </div>
          <div className="mx-auto max-w-5xl w-full px-4 lg:px-8">
            <PDFViewer pdfUrl="/Andrew Della Penna '25 Resume.pdf" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container space-y-8 py-16 md:py-20 lg:py-32 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent leading-tight">
              Contact
            </h2>
            <p className="max-w-3xl leading-relaxed text-slate-700 text-lg sm:text-xl lg:text-2xl sm:leading-8">
              Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 mt-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-blue-50 to-sky-50 border-blue-300 text-blue-700 hover:from-blue-100 hover:to-sky-100 shadow-sm px-8 py-4 text-lg"
              >
                <Link href="mailto:adellapenna02@gmail.com">
                  <Mail className="mr-3 h-6 w-6" />
                  adellapenna02@gmail.com
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-sky-50 to-cyan-50 border-sky-300 text-sky-700 hover:from-sky-100 hover:to-cyan-100 shadow-sm px-8 py-4 text-lg"
              >
                <Link href="https://github.com/andrewdp02" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-6 w-6" />
                  GitHub
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-300 text-cyan-700 hover:from-cyan-100 hover:to-blue-100 shadow-sm px-8 py-4 text-lg"
              >
                <Link href="https://www.linkedin.com/in/andrew-della-penna" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-6 w-6" />
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
