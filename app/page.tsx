import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import DepartmentsSection from "@/components/departments-section"
import AppointmentSection from "@/components/appointment-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DepartmentsSection />
      <AppointmentSection />
      <Footer />
    </main>
  )
}

