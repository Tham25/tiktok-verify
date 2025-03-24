"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Appointment request submitted!")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make an appointment</h2>
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

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="+00 141 23 234"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Booking Date
              </label>
              <div className="relative">
                <Input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="dd/mm/yy"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <Select onValueChange={(value) => handleSelectChange("department", value)} value={formData.department}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="dental">Dental Care</SelectItem>
                  <SelectItem value="pulmonary">Pulmonary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">
                Doctor
              </label>
              <Select onValueChange={(value) => handleSelectChange("doctor", value)} value={formData.doctor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                  <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                  <SelectItem value="dr-williams">Dr. Williams</SelectItem>
                  <SelectItem value="dr-brown">Dr. Brown</SelectItem>
                  <SelectItem value="dr-jones">Dr. Jones</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write something here..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
            Appointment
          </Button>
        </form>
      </div>
    </section>
  )
}

