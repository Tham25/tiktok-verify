import Image from "next/image"
import { Phone } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-12 bg-teal-500"></div>
            <div className="mx-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8Z"
                  fill="#0DBFB3"
                />
              </svg>
            </div>
            <div className="h-0.5 w-12 bg-teal-500"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's
            standard dummy text.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A hospital is a health care institution providing patient treatment with specialized medical
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip.
              Commodo consequat.
            </p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip.
              Commodo consequat. Sed do eiusmod tempor incidid unt labore et dolore magna aliqua.
            </p>

            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="David Ambrose"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-500">David Ambrose</h4>
                <p className="text-gray-600 text-sm">Founder & Director</p>
              </div>
            </div>
          </div>

          <div className="border border-teal-100 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Weekly Timetable</h3>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Monday</span>
                <span className="text-gray-700">8:00am-7:00pm</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Tuesday</span>
                <span className="text-gray-700">9:00am-6:00pm</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Wednesday</span>
                <span className="text-gray-700">9:00am-6:00pm</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Thursday</span>
                <span className="text-gray-700">8:00am-7:00pm</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Friday</span>
                <span className="text-gray-700">8:00am-7:00pm</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-700">9:00am-5:00pm</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span className="text-gray-700">Sunday</span>
                <span className="text-gray-700">9:00am-3:00pm</span>
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <div className="mr-3">
                <Phone className="h-6 w-6 text-teal-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Call Now</p>
                <p className="text-lg font-semibold text-teal-500">(+01) - 234 567 890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

