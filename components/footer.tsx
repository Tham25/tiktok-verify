import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8Z"
                    fill="#0DBFB3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Capbbr</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/departments/cardiology" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/departments/neurology" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/departments/orthopedics" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/departments/dental" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Dental Care
                </Link>
              </li>
              <li>
                <Link href="/departments/pulmonary" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Pulmonary
                </Link>
              </li>
              <li>
                <Link href="/departments/x-ray" className="text-gray-400 hover:text-teal-500 transition-colors">
                  X-Ray
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Medical Center Dr, Healthcare City, 10001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(+01) - 234 567 890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@capbbr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Capbbr Medical Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

