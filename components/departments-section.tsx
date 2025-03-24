import Image from "next/image"
import Link from "next/link"
import { CuboidIcon as Crutches, Stethoscope, Heart, TreesIcon as Lungs, SmileIcon as Tooth, Brain } from "lucide-react"

export default function DepartmentsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our department</h2>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <DepartmentCard icon={<Crutches className="h-10 w-10" />} title="Crutches" isActive={true} />
          <DepartmentCard icon={<Stethoscope className="h-10 w-10" />} title="X-ray" />
          <DepartmentCard icon={<Heart className="h-10 w-10" />} title="Pulmonary" />
          <DepartmentCard icon={<Lungs className="h-10 w-10" />} title="Cardiology" />
          <DepartmentCard icon={<Tooth className="h-10 w-10" />} title="Dental care" />
          <DepartmentCard icon={<Brain className="h-10 w-10" />} title="Neurology" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-100 opacity-50 z-0 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100 opacity-50 z-0 rounded-full"></div>
            <div className="relative z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Doctor helping patient with crutches"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Welcome to our <span className="text-teal-500">Crutches</span>
            </h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.
            </p>
            <p className="text-gray-600 mb-6">
              Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised
              in the with the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
            <Link
              href="/departments/crutches"
              className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function DepartmentCard({ icon, title, isActive = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all ${isActive ? "bg-teal-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-center font-medium">{title}</h3>
    </div>
  )
}

