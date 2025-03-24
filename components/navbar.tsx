import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full py-4 bg-white border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="mr-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" fill="#1A1A1A" />
              <path
                d="M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8Z"
                fill="#0DBFB3"
              />
              <path d="M22 14C22 10.6863 19.3137 8 16 8V20C19.3137 20 22 17.3137 22 14Z" fill="#0AA59A" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Capbbr</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm border-b-2 border-teal-500 pb-1">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:text-teal-500">
            About
          </Link>
          <Link href="/department" className="text-sm hover:text-teal-500">
            Department
          </Link>
          <Link href="/doctors" className="text-sm hover:text-teal-500">
            Doctors
          </Link>
          <Link href="/gallery" className="text-sm hover:text-teal-500">
            Gallery
          </Link>
          <Link href="/pricing" className="text-sm hover:text-teal-500">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm hover:text-teal-500">
            Blog
          </Link>
          <Link href="/contact" className="text-sm hover:text-teal-500">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}

