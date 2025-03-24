import Link from "next/link"
import { Facebook, Linkedin, PinIcon as Pinterest, Twitter } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-300 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-tl-[50%] rounded-tr-[50%]"></div>

      <div className="container relative mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Take best quality treatment for{" "}
            <span className="relative">
              Cardiology.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 5C50 -1.66667 150 -1.66667 200 5C150 11.6667 50 11.6667 0 5Z" fill="#FFD700" />
              </svg>
            </span>
          </h1>
          <p className="text-black/80 mb-2">
            The art of medicine consists in amusing the patient while nature cures the disease.
          </p>
          <p className="text-black/80 mb-8">Treatment without prevention is simply unsustainable.</p>

          <Link
            href="/appointment"
            className="inline-flex h-12 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Appointment
          </Link>
        </div>

        <div className="absolute bottom-12 left-4 flex space-x-4">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-teal-500" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-teal-500" />
          </Link>
          <Link href="#" aria-label="Pinterest">
            <Pinterest className="h-5 w-5 text-teal-500" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-teal-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}

