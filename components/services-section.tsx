import { User, Clock, AlertTriangle } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<User className="h-12 w-12 text-indigo-500" />}
            title="Qualified Doctors"
            description="Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore."
          />
          <ServiceCard
            icon={<Clock className="h-12 w-12 text-green-500" />}
            title="24 Hours Service"
            description="Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore."
          />
          <ServiceCard
            icon={<AlertTriangle className="h-12 w-12 text-red-500" />}
            title="Need Emergency"
            description="Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

